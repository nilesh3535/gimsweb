import React from "react";
import { useHistory } from "react-router-dom";

const AccLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("uid");
  localStorage.removeItem("profilephoto");
  localStorage.removeItem("uname");
  localStorage.removeItem("umail");
  let history = useHistory();
  history.push({
    pathname: "/signin",
  });
  return <></>;
};

export default AccLogout;
