import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "hello world",
    type: "danger",
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      setAlert({ show: true, msg: "please enter value", type: "danger" });
    } else if (name && isEditing) {
      setList(
        list.map(item => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      setAlert({ show: true, msg: "value changed", type: "success" });
    } else {
      setAlert({ show: true, type: "success", msg: "item added to the list" });
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  console.log(`is editing`, isEditing);
  const clearList = () => {
    setAlert({ show: true, type: "danger", msg: "empty list" });
    setList([]);
  };
  const removeItemId = id => {
    setAlert({ show: true, type: "danger", msg: "item removed" });
    setList(list.filter(item => item.id !== id));
  };
  const editItem = id => {
    const specificItem = list.find(item => item.id === id);
    setName(specificItem.title);
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert
            {...alert}
            removeAlert={() => setAlert({ ...alert, show: false })}
          />
        )}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            items={list}
            setIsEditing={setIsEditing}
            removeItemId={removeItemId}
            editItem={editItem}
            setEditId={setEditId}
          />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
