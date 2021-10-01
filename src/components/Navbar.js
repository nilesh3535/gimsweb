import React, { useState } from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CropFreeIcon from "@material-ui/icons/CropFree";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { Link } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbars() {
 
  const token = localStorage.getItem("token");
  var pp = localStorage.getItem("profilephoto");
  var uname = localStorage.getItem("uname");

  let log = true;
  if (token == null) {
    log = false;
  } else {
    log = true;
  }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <ul className="navbar">
          <li>
            <Link to="#" className="menu-bars">
              <DehazeIcon id="toggleicon" onClick={showSidebar} />
            </Link>
          </li>
          <li>
            <Link to="/" style={{ display: "flex" }}>
              <ShoppingCartIcon id="logoicon" />
              <p id="logotext">GIMS</p>
            </Link>
          </li>
          <li
            style={{ display: "flex", marginTop: "15px", marginLeft: "auto" }}
          >
            <PersonPinCircleIcon id="locationlogo" />
            
              <p id="locationtext">
                {/* {`${details.city}, ${details.country_name}(${details.country_code})`} */}
                Katraj,pune,Maharashtra
              </p>
            
          </li>

          {log ? (
            <li style={{ marginLeft: "auto" }}>
              q
              <Link
                className="navbar__listlink"
                to="/acc"
                style={{ textDecoration: "none" }}
              >
                <div id="accicon" style={{ color: "black" }}>
                  <img id="accpic" src={pp} alt="Hii" />
                </div>
              </Link>
            </li>
          ) : (
            <li style={{ marginLeft: "auto" }}>
              <Link
                className="navbar__listlink"
                to="/account-login"
                style={{ textDecoration: "none" }}
              >
                <div id="accounticon" style={{ color: "black" }}>
                  <AccountCircleIcon id="accicon" />
                </div>
              </Link>
            </li>
          )}
        </ul>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <ShoppingCartIcon id="sidelogoicon" />
              <p id="sidelogotext">GIMS</p>
              <Link to="#" className="menu-bars">
                <CloseIcon id="togglecloseicon" />
              </Link>
            </li>
            {log ? <li className="nav-name">Welcome {uname}</li> : ""}
            {SidebarItem.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            {log ? (
              <li className="nav-text">
                <Link to="/logout" id="logout">
                  <ExitToAppIcon />
                  <span>Logout</span>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbars;
