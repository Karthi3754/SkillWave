import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
    </div>
  );
};

export default Loading;