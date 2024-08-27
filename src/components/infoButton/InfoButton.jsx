import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./infoButton.css";
import Modal from "../modal/Modal";

const InfoButton = () => {
  const activeColor = useSelector((state) => state.main.activeColor);

  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log("isModalVisible", isModalVisible);

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
      {isModalVisible && <Modal />}
    </div>
  );
};

export default InfoButton;