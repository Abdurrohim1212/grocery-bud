import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      removeAlert();
    }, 10000);
  }, []);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
