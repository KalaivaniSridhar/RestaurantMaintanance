import React, { useState } from "react";
import "./MenuItem.css"
import { FiEdit } from "react-icons/fi";

import { CgSearchLoading } from "react-icons/cg";
import AddMenu from "./AddMenuItem";
import { FaPlusSquare } from "react-icons/fa";

class Header extends React.Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <div>
        <div>
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
          <div className="btn padding"
            onClick={(e) => this.setState({ isOpen: true })}
          >
            <FaPlusSquare style={{ fontSize: "14px" }} />
            ADD New  Menu
            <AddMenu isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>

              <div style={{ color: 'black' }} className="container">
                <form className="register-form">
                  <h3>Update Menu</h3>
                  <input
                    name="id"
                    placeholder="id"
                    class='form-field'
                  />
                  <input
                    name="Category"
                    placeholder="Category"
                    class='form-field'
                  />
                  <input
                    name="Description"
                    placeholder="Description"
                    class='form-field'
                  />
                  <input
                    name="Price"
                    placeholder="Price"
                    class='form-field'
                  />
                  <button className="btn form-field">Update Menu</button>
                  </form></div>
                </AddMenu>
              </div>
          </div>
        </div>

        );
  }
}

        // export default App;
        export default Header;
