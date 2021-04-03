import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, setIsEditing, removeItemId, setEditId, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map(item => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => {
                  setIsEditing(true);
                  setEditId(id);
                  editItem(id);
                }}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => {
                  removeItemId(id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
