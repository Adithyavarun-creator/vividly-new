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
import { IoFilterSharp } from "react-icons/io5";

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

const Sidebar = () => {
  const [toggleColor, setToggleColor] = useState(true);
  const [toggleSketch, setToggleSketch] = useState(true);
  const [toggleFrame, setToggleFrame] = useState(true);
  const [toggleText, setToggleText] = useState(true);
  const [toggleShape, setToggleShape] = useState(true);

  const [background, setBackground] = useState("#fff");

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };
  return (
    <div className="sidebar-section">
      <div className="filtertitlebox">
        <IoFilterSharp />
        <h3 className="filtertitle">Adjust using filters below</h3>
      </div>

      {/* Filter-1 */}
      <div className="sidebar-filterbox">
        <div className="">
          <span
            className="sidebar-filtertitle"
            onClick={() => setToggleSketch(!toggleSketch)}
          >
            Adjust<span className="boldtext">&nbsp;Sketch Brush</span>
            {toggleSketch ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
        </div>
        {toggleSketch && (
          <div className="sketch-pencil">
            <div className="iconbox">
              <GiPencilBrush className="sketch-icon" title="Brush" />
              <p className="icontext">Brush</p>
            </div>

            <div className="iconbox">
              <FaPaintbrush className="sketch-icon" title="Paint Brush" />
              <p className="icontext">Paint brush</p>
            </div>

            <div className="iconbox">
              <IoIosBrush className="sketch-icon" title="Sketch Brush" />
              <p className="icontext">Sketch brush</p>
            </div>

            <div className="iconbox">
              <FaBrush className="sketch-icon" title="Paint Brush" />
              <p className="icontext">paint brush</p>
            </div>

            <div className="iconbox">
              <MdOutlineBrush className="sketch-icon" title="Outline Brush" />
              <p className="icontext">outline Brush</p>
            </div>

            <div className="iconbox">
              <MdBrush className="sketch-icon" title="Pen Brush" />
              <p className="icontext">pen Brush</p>
            </div>

            <div className="iconbox">
              <TfiBrush className="sketch-icon" title="Pencil Brush" />
              <p className="icontext">pencil Brush</p>
            </div>

            <div className="iconbox">
              <RiBrush2Fill className="sketch-icon" title="Filled Brush" />
              <p className="icontext">filled Brush</p>
            </div>
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
            Adjust<span className="boldtext">&nbsp;Color</span>
            {toggleColor ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
        </div>
        {toggleColor && (
          <div className="sketch">
            <SketchPicker
              color={background}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        )}
      </div>

      {/* Filter-3 */}
      <div className="sidebar-filterbox">
        <div className="">
          <span
            className="sidebar-filtertitle"
            onClick={() => setToggleFrame(!toggleFrame)}
          >
            Adjust<span className="boldtext">&nbsp;Frames</span>
            {toggleFrame ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
          </span>
        </div>
        {toggleFrame && (
          <div className="sketch-pencil">
            <div className="iconbox">
              <MdFilterFrames className="sketch-icon" title="Framebox" />
              <p className="icontext">Frame</p>
            </div>

            <div className="iconbox">
              <LuFrame className="sketch-icon" title="LuFrame" />
              <p className="icontext">LuFrame</p>
            </div>

            <div className="iconbox">
              <GiStickFrame className="sketch-icon" title="Stick Frame" />
              <p className="icontext">Stick Frame</p>
            </div>

            <div className="iconbox">
              <GiWoodFrame className="sketch-icon" title="Wood Frame" />
              <p className="icontext">Wood Frame</p>
            </div>

            <div className="iconbox">
              <TbFrame className="sketch-icon" title="Tb Frame" />
              <p className="icontext">Tb Frame</p>
            </div>

            <div className="iconbox">
              <SlFrame className="sketch-icon" title="Single Frame" />
              <p className="icontext">Single Frame</p>
            </div>

            <div className="iconbox">
              <PiFrameCorners className="sketch-icon" title="Corner Frame" />
              <p className="icontext">Corner Frame</p>
            </div>

            <div className="iconbox">
              <RxFrame className="sketch-icon" title="Rx Frame" />
              <p className="icontext">Rx Frame</p>
            </div>
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
            Adjust<span className="boldtext">&nbsp;Text</span>
            {toggleText ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
          </span>
        </div>
        {toggleText && (
          <div className="sketch-pencil">
            <div className="iconbox">
              <FaTextHeight className="sketch-icon" title="Text Height" />
              <p className="icontext">Text Height</p>
            </div>
            <div className="iconbox">
              <FaTextSlash className="sketch-icon" title="Slash Text" />
              <p className="icontext">Slash Text</p>
            </div>
            <div className="iconbox">
              <IoText className="sketch-icon" title="Text Normal" />
              <p className="icontext">Text Normal</p>
            </div>
            <div className="iconbox">
              <MdFormatColorText className="sketch-icon" title="Color text" />
              <p className="icontext">Color text</p>
            </div>
            <div className="iconbox">
              <MdOutlineTextDecrease
                className="sketch-icon"
                title="Text Decrease"
              />
              <p className="icontext">Text decrease</p>
            </div>
            <div className="iconbox">
              <MdOutlineTextIncrease
                className="sketch-icon"
                title="Text Increase"
              />
              <p className="icontext">Text increase</p>
            </div>
            <div className="iconbox">
              <MdTextRotationAngledown
                className="sketch-icon"
                title="Text down"
              />
              <p className="icontext">Text down</p>
            </div>
            <div className="iconbox">
              <MdTextRotationAngleup className="sketch-icon" title="Text up" />
              <p className="icontext">Text up</p>
            </div>
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
            Adjust<span className="boldtext">&nbsp;Shapes</span>
            {toggleShape ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
          </span>
        </div>
        {toggleShape && (
          <div className="sketch-pencil">
            <div className="iconbox">
              <FaShapes className="sketch-icon" title="Shape" />
              <p className="icontext">Shapes</p>
            </div>
            <div className="iconbox">
              <IoShapes className="sketch-icon" title="Out" />
              <p className="icontext">Out</p>
            </div>
            <div className="iconbox">
              <MdShapeLine className="sketch-icon" title="Line" />
              <p className="icontext">Line</p>
            </div>
            <div className="iconbox">
              <RiShape2Fill className="sketch-icon" title="Fill" />
              <p className="icontext">Fill</p>
            </div>
            <div className="iconbox">
              <CgShapeCircle className="sketch-icon" title="Circle" />
              <p className="icontext">Circle</p>
            </div>
            <div className="iconbox">
              <CgShapeHexagon className="sketch-icon" title="Hexagon" />
              <p className="icontext">Hexagon</p>
            </div>
            <div className="iconbox">
              <CgShapeRhombus className="sketch-icon" title="Rhombus" />
              <p className="icontext">Rhombus</p>
            </div>
            <div className="iconbox">
              <CgShapeSquare className="sketch-icon" title="Square" />
              <p className="icontext">Square</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
