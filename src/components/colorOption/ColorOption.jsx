import { useDispatch } from "react-redux";
import "./colorOption.css";
import { changeActiveColor } from "../../slice/mainSlice";

const ColorOption = ({ color }) => {
  const dispatch = useDispatch();
  const changeColor = () => {
    dispatch(changeActiveColor(color));
    console.log("CHange color clicked:", color);
  };

  return (
    <div
      onClick={changeColor}
      className="color"
      style={{ backgroundColor: color.colorHeader }}
    ></div>
  );
};

export default ColorOption;
