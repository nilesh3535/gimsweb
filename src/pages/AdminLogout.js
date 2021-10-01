import React from "react";
import { useHistory } from "react-router-dom";

const AdminLogout = () => {
  localStorage.removeItem("admintoken");
  localStorage.removeItem("adminpic");
  localStorage.removeItem("aname");
  let history = useHistory();

  history.push({
    pathname: "/",
  });
  // alert("Logout Successfully")
  return <></>;
};

export default AdminLogout;
