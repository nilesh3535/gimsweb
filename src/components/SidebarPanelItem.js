import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

export const SidebarPanelItem = [
  {
    title: "Dashboard",
    path: "/adminpanel",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Add Products",
    path: "/add-prod",
    icon: <AddIcon />,
    cName: "nav-text",
  },
  {
    title: "View Products",
    path: "/view-prod",
    icon: <ListAltIcon />,
    cName: "nav-text",
  },
  {
    title: "View Orders",
    path: "/view-custorders",
    icon: <ShoppingCartIcon />,
    cName: "nav-text",
  },
  {
    title: "Dispatched Orders",
    path: "/dispatched-orders",
    icon: <TrendingUpIcon />,
    cName: "nav-text",
  },
  {
    title: "Completed Orders",
    path: "/completed-orders",
    icon: <DoneOutlineIcon />,
    cName: "nav-text",
  },
  {
    title: "Cancelled Orders",
    path: "/cancelled-orders",
    icon: <RemoveShoppingCartIcon />,
    cName: "nav-text",
  },
  {
    title: "View Shops",
    path: "/",
    icon: <LiveHelpIcon />,
    cName: "nav-text",
  },
];
