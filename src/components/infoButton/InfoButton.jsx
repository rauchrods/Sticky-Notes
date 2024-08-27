import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./infoButton.css";
import Modal from "../modal/Modal";
import { links } from "../../assets/constant/links";

const InfoButton = () => {
  const activeColor = useSelector((state) => state.main.activeColor);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalHandler = () => {
    setIsModalVisible((currState) => !currState);
  };

  return (
    <div className="info-btn" onClick={showModalHandler}>
      <FaInfoCircle
        size={"28px"}
        color={activeColor.colorBody}
        onClick={() => {
          console.log("hello info!!");
        }}
      />
      {isModalVisible && (
        <Modal>
          <ul>
            {links.map((link, index) => (
              <div key={index}>
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
        </Modal>
      )}
    </div>
  );
};

export default InfoButton;
