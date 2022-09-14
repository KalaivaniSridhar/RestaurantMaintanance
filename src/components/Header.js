import React, { useState } from "react";
// import "./Header.css";
import "./MenuItem.css"
import { FiEdit } from "react-icons/fi";

import { CgSearchLoading } from "react-icons/cg";
import AddMenuItem from "./AddMenuItem";
import { FaPlusSquare } from "react-icons/fa";

const Header = ({ }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        {/* <div>
          <span className="logo">Resturent</span>
        </div> */}
        {/* <body> */}

        <nav className="header">
          <img src="https://i.ytimg.com/vi/AUml2IgSFCQ/maxresdefault.jpg" alt="" className="logo-img" />
          <div className="Logo">PureFit</div>
          <ul className="nav-links">
            <div className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
            </div>
          </ul>
        </nav>
        <div className="btn padding" onClick={() => {
          setOpen(true);
        }}><FaPlusSquare style={{ fontSize: "14px" }} />
          ADD New  Menu
          {open ? <AddMenuItem AddNewitem={open} /> : ""}
        </div>
      </div>
    </>
  );
};

export default Header;
