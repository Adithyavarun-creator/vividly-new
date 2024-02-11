import React, { useState } from "react";
import "./Sidebar.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { SketchPicker } from "react-color";
import { GiPencilBrush, GiStickFrame, GiWoodFrame } from "react-icons/gi";
import {
  FaBrush,
  FaPaintbrush,
  FaShapes,
  FaTextHeight,
  FaTextSlash,
} from "react-icons/fa6";
import {
  CgShapeCircle,
  CgShapeHexagon,
  CgShapeRhombus,
  CgShapeSquare,
} from "react-icons/cg";
import { IoIosBrush } from "react-icons/io";
import {
  MdBrush,
  MdFilterFrames,
  MdFormatColorText,
  MdOutlineBrush,
  MdOutlineTextDecrease,
  MdOutlineTextIncrease,
  MdShapeLine,
  MdTextRotationAngledown,
  MdTextRotationAngleup,
} from "react-icons/md";
import { TfiBrush } from "react-icons/tfi";
import { RiBrush2Fill, RiShape2Fill } from "react-icons/ri";
import { LuFrame } from "react-icons/lu";
import { TbFrame } from "react-icons/tb";
import { SlFrame } from "react-icons/sl";
import { PiFrameCorners } from "react-icons/pi";
import { RxFrame } from "react-icons/rx";
import { IoShapes, IoText } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";

const Sidebar = () => {
  const [toggleColor, setToggleColor] = useState(false);
  const [toggleSketch, setToggleSketch] = useState(true);
  const [toggleFrame, setToggleFrame] = useState(false);
  const [toggleText, setToggleText] = useState(false);
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [toggleShape, setToggleShape] = useState(false);

  const [background, setBackground] = useState("#fff");

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };
  return (
    <div className="sidebar-section">
      <div>
        <h3>Adjust using filters below</h3>
      </div>

      {/* Filter-1 */}
      <div className="sidebar-filterbox">
        <div className="">
          <span
            className="sidebar-filtertitle"
            onClick={() => setToggleSketch(!toggleSketch)}
          >
            Adjust Sketch Brush
            {toggleSketch ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
        </div>
        {toggleSketch && (
          <div className="sketch-pencil">
            <GiPencilBrush className="sketch-icon" />
            <FaPaintbrush className="sketch-icon" />
            <IoIosBrush className="sketch-icon" />
            <FaBrush className="sketch-icon" />
            <MdOutlineBrush className="sketch-icon" />
            <MdBrush className="sketch-icon" />
            <TfiBrush className="sketch-icon" />
            <RiBrush2Fill className="sketch-icon" />
          </div>
        )}
      </div>

      {/* Filter-2 */}

      <div className="sidebar-filterbox">
        <div className="">
          <span
            className="sidebar-filtertitle"
            onClick={() => setToggleColor(!toggleColor)}
          >
            Adjust Color{" "}
            {toggleColor ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
        </div>
        {toggleColor && (
          <SketchPicker
            className="sketch"
            color={background}
            onChangeComplete={handleChangeComplete}
          />
        )}
      </div>

      {/* Filter-3 */}
      <div className="sidebar-filterbox">
        <div className="">
          <span
            className="sidebar-filtertitle"
            onClick={() => setToggleFrame(!toggleFrame)}
          >
            Adjust Frames
            {toggleFrame ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
          </span>
        </div>
        {toggleFrame && (
          <div className="sketch-pencil">
            <MdFilterFrames className="sketch-icon" />
            <LuFrame className="sketch-icon" />
            <GiStickFrame className="sketch-icon" />
            <GiWoodFrame className="sketch-icon" />
            <TbFrame className="sketch-icon" />
            <SlFrame className="sketch-icon" />
            <PiFrameCorners className="sketch-icon" />
            <RxFrame className="sketch-icon" />
          </div>
        )}
      </div>

      {/* Filter-4 */}
      <div className="sidebar-filterbox">
        <div className="">
          <span
            className="sidebar-filtertitle"
            onClick={() => setToggleText(!toggleText)}
          >
            Adjust Text
            {toggleText ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
          </span>
        </div>
        {toggleText && (
          <div className="sketch-pencil">
            <FaTextHeight className="sketch-icon" />
            <FaTextSlash className="sketch-icon" />
            <IoText className="sketch-icon" />
            <MdFormatColorText className="sketch-icon" />
            <MdOutlineTextDecrease className="sketch-icon" />
            <MdOutlineTextIncrease className="sketch-icon" />
            <MdTextRotationAngledown className="sketch-icon" />
            <MdTextRotationAngleup className="sketch-icon" />
          </div>
        )}
      </div>

      {/* Filter-5 */}
      <div className="sidebar-filterbox">
        <div className="">
          <span
            className="sidebar-filtertitle"
            onClick={() => setToggleEmoji(!toggleEmoji)}
          >
            Add Emojis
            {toggleEmoji ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
          </span>
        </div>
        {toggleEmoji && (
          <div className="sketch-pencil">
            <EmojiPicker className="" />
          </div>
        )}
      </div>

      {/* Filter-6 */}
      <div className="sidebar-filterbox">
        <div className="">
          <span
            className="sidebar-filtertitle"
            onClick={() => setToggleShape(!toggleShape)}
          >
            Adjust Shapes
            {toggleShape ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
          </span>
        </div>
        {toggleShape && (
          <div className="sketch-pencil">
            <FaShapes className="sketch-icon" />
            <IoShapes className="sketch-icon" />
            <MdShapeLine className="sketch-icon" />
            <RiShape2Fill className="sketch-icon" />
            <CgShapeCircle className="sketch-icon" />
            <CgShapeHexagon className="sketch-icon" />
            <CgShapeRhombus className="sketch-icon" />
            <CgShapeSquare className="sketch-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
