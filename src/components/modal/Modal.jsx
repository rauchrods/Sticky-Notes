import React from "react";
import { useSelector } from "react-redux";
import "./modal.css";
import { createPortal } from "react-dom";

const links = [
  {
    href: "https://rauchrodrigues.vercel.app/",
    text: "My Portfolio",
  },
  {
    href: "https://github.com/rauchrods",
    text: "Profile",
  },
  {
    href: "https://www.instagram.com/raudricks1508/",
    text: "Follow me on Instagram",
  },
];

const Modal = () => {
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
          <ul>
            {links.map((link) => (
              <div>
                <li>
                  <a
                    href={link.href}
                    target="_blank"
                    style={{ color: activeColor.colorText }}
                  >
                    {link.text}
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
