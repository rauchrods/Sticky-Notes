import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../assets/constant/colors";
import { Plus } from "../../assets/icons/Plus";
import ColorOption from "../colorOption/ColorOption";
import "./controls.css";
import { addNotes } from "../../slice/mainSlice";
import { setZIndex } from "../../utils";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const activeColor = useSelector((state) => state.main.activeColor);
  const notes = useSelector((state) => state.main.notes);

  const addNoteHandler = () => {
    const newNote = {
      $id: notes.length + 1,
      body: "Add a note here !!",
      position: {
        x: 0,
        y: 0,
      },
      colors: activeColor,
    };

    dispatch(addNotes(newNote));
    setZIndex(newNote);
  };

  return (
    <div id="controls">
      <div
        id="add-btn"
        onClick={addNoteHandler}
        style={{
          backgroundColor: activeColor.colorHeader,
        }}
      >
        <Plus color={activeColor.colorText} />
      </div>
      <div className="color-options">
        {colors.map((color) => (
          <ColorOption key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Controls;
