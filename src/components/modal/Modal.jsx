import React from "react";
import { useSelector } from "react-redux";
import "./modal.css";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const activeColor = useSelector((state) => state.main.activeColor);

  return createPortal(
    <div className="modal-wrapper">
      <div className="modal-content" style={{ color: activeColor.colorText }}>
        <div
          className="modal-header"
          style={{ backgroundColor: activeColor.colorHeader }}
        >
          <div className="title">
            <img src="/sticky-notes.png" alt="notes-img" />
            <h2>Sticky Notes</h2>
          </div>
          <div className="title-2">
            <p>By Rauch Rodrigues</p>
          </div>
        </div>
        <div
          className="modal-body"
          style={{ backgroundColor: activeColor.colorBody }}
        >
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
