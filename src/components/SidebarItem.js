import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";

import PersonIcon from "@material-ui/icons/Person";

export const SidebarItem = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Product Category",
    path: "/Prod-cat",
    icon: <ViewStreamIcon />,
    cName: "nav-text",
  },
  {
    title: "My List",
    path: "/my-list",
    icon: <ListAltIcon />,
    cName: "nav-text",
  },
  {
    title: "My Cart",
    path: "/my-cart",
    icon: <ShoppingCartIcon />,
    cName: "nav-text",
  },
  {
    title: "Account",
    path: "/acc",
    icon: <PersonIcon />,
    cName: "nav-text",
  },

  {
    title: "Contact Us",
    path: "/contact",
    icon: <ContactSupportIcon />,
    cName: "nav-text",
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <LiveHelpIcon />,
    cName: "nav-text",
  },
];
