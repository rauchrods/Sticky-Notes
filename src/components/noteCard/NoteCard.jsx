import { useEffect, useRef, useState } from "react";
import Trash from "../../assets/icons/Trash";
import "./noteCard.css";
import { autoGrow, setNewOffset, setZIndex } from "../../utils";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../../slice/mainSlice";

const NoteCard = ({ note }) => {
  const { position, body, colors } = note;

  const dispatch = useDispatch();

  const textAreaRef = useRef();

  let mouseStartPos = { x: 0, y: 0 };

  const cardRef = useRef(null);

  const mouseDown = (e) => {
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);

    setZIndex(cardRef.current);
  };

  const mouseMove = (e) => {
    //1 - Calculate move direction
    let mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    //2 - Update start position for next move.
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    //3 - Update card top and left position.
    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);
    dispatch(updateNote({ ...note, position: newPosition }));
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  };

  const deleteCardHandler = () => {
    dispatch(deleteNote(note));
    console.log("delete card");
  };

  const updateBodyHandler = (text) => {
    dispatch(updateNote({ ...note, body: text }));
  };

  console.log(body);
  useEffect(() => {
    autoGrow(textAreaRef);
  }, [note]);

  return (
    <div
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      ref={cardRef}
    >
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
        onMouseDown={mouseDown}
      >
        <div className="delete-btn" onClick={deleteCardHandler}>
          <Trash />
        </div>
      </div>
      <div className="card-body">
        <textarea
          style={{ color: colors.colorText }}
          value={body}
          ref={textAreaRef}
          onInput={() => autoGrow(textAreaRef)}
          onFocus={() => {
            setZIndex(cardRef.current);
          }}
          onChange={(e) => updateBodyHandler(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard;
