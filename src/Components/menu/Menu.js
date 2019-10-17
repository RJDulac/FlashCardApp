import React from "react";

import "./Menu.scss";

const Menu = () => (
  <nav className="menu">
    <ol>
      <li className="menu-item">
        <a href="#0">Menu Item 1</a>
      </li>
      <li className="menu-item">
        <a href="#0">Menu Item 2</a>
      </li>
      <li className="menu-item">
        <a href="#0">Dropdown Menu 1</a>
        <ol className="sub-menu">
          <li className="menu-item">
            <a href="#0">Item 1</a>
          </li>
          <li className="menu-item">
            <a href="#0">item 2</a>
          </li>
          <li className="menu-item">
            <a href="#0">Item 3</a>
          </li>
        </ol>
      </li>
      <li className="menu-item">
        <a href="#0">Dropdown Menu 2</a>
        <ol className="sub-menu">
          <li className="menu-item">
            <a href="#0">Item A</a>
          </li>
          <li className="menu-item">
            <a href="#0">Item B</a>
          </li>
          <li className="menu-item">
            <a href="#0">Item C</a>
          </li>
        </ol>
      </li>
      <li className="menu-item">
        <a href="#0">Contact</a>
      </li>
    </ol>
  </nav>
);

export default Menu;
