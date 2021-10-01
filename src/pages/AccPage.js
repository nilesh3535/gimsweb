import React from "react";
import "./AccPage.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AccPage = () => {
  let history = useHistory();
  const token = localStorage.getItem("token");
  if (token == null) {
  } else {
    history.push({
      pathname: "/",
    });
  }
  return (
    <div className="accpage">
      <h1>
        Get started with us today! <br />
      </h1>
      <Link to="/signin">
        <Button className="buttonstyle" variant="btn btn-success">
          <PersonOutlineIcon style={{ marginRight: "5px" }} />
          Sign In
        </Button>
      </Link>
      <Link to="/signup">
        <Button className="buttonstyle" variant="btn btn-success">
          <PersonAddIcon style={{ marginRight: "5px" }} />
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default AccPage;
