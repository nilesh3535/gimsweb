import React, { useState } from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { Link } from "react-router-dom";
// import { SidebarItem } from './SidebarItem';
import { SidebarPanelItem } from "./SidebarPanelItem";

import "./AdminPanel.css";
import { IconContext } from "react-icons";
import AddProducts from "../pages/AddProducts";
import ViewProducts from "../pages/ViewProducts";
import AdminLogout from "../pages/AdminLogout";
import UpdateProducts from "../pages/UpdateProducts";
import ViewCustOrders from "../pages/ViewCustOrders";
import ViewFullOrderDetails from "../pages/ViewFullOrderDetails";
import DispatchedOrders from "../pages/DispatchedOrders";
import ViewFullDispatchedOrder from "../pages/ViewFullDispatchedOrder";
import CompletedOrders from "../pages/CompletedOrders";
import ViewFullCompletedOrder from "../pages/ViewFullCompltedOrder";
import CancelledOrders from "../pages/CancelledOrders";

function AdminPanel() {
  const token = localStorage.getItem("admintoken");
  const apic = localStorage.getItem("adminpic");
  const aname = localStorage.getItem("aname");

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
      <Router>
        <IconContext.Provider value={{ color: "#fff" }}>
          <ul className="navbar">
            <li>
              <Link to="#" className="menu-bars">
                <DehazeIcon id="toggleicon" onClick={showSidebar} />
              </Link>
            </li>
            <li>
              <Link to="/adminpanel" style={{ display: "flex" }}>
                <ShoppingCartIcon id="logoicon" />
                <p id="logotext">ADMIN PANEL</p>
              </Link>
            </li>

            {log ? (
              <li style={{ marginLeft: "auto" }}>
                <Link
                  className="navbar__listlink"
                  to="/adminpanel"
                  style={{ textDecoration: "none" }}
                >
                  <div id="accicon" style={{ color: "black" }}>
                    <img id="accpic" src={apic} alt="Hii" />
                  </div>
                </Link>
              </li>
            ) : (
              ""
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

              {log ? <li className="nav-name"> {aname}</li> : ""}
              {SidebarPanelItem.map((item, index) => {
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
                  <Link to="/adminlogout" id="logout">
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

        <Route path="/add-prod" component={AddProducts} />
        <Route path="/view-prod" component={ViewProducts} />
        <Route path="/update-prod" component={UpdateProducts} />
        <Route path="/view-custorders" component={ViewCustOrders} />
        <Route path="/view-fullorderdetails" component={ViewFullOrderDetails} />
        <Route
          path="/view-fulldispatchedorder"
          component={ViewFullDispatchedOrder}
        />
        <Route
          path="/view-fullcompletedorder"
          component={ViewFullCompletedOrder}
        />

        <Route path="/dispatched-orders" component={DispatchedOrders} />
        <Route path="/completed-orders" component={CompletedOrders} />
        <Route path="/cancelled-orders" component={CancelledOrders} />

        <Route path="/adminlogout" component={AdminLogout} />
      </Router>
    </>
  );
}

export default AdminPanel;
