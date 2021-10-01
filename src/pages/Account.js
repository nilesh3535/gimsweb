import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import EditIcon from "@material-ui/icons/Edit";
import HistoryIcon from "@material-ui/icons/History";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const token = localStorage.getItem("token");
var pp = localStorage.getItem("profilephoto");
var umail = localStorage.getItem("umail");

const Account = () => {
  let history = useHistory();
  const [cname, setCname] = useState("");
  const [cphone, setCphone] = useState("");
  const [caddr, setCaddr] = useState("");

  if (token == null) {
    history.push({
      pathname: "/signin",
    });
  } else {
    Axios.put("https://gims-app.herokuapp.com/api/acc-details", {
      umail: umail,
    }).then((response) => {
      setCname(response.data[0].custName);
      setCphone(response.data[0].custPhone);
      setCaddr(response.data[0].custAddr);
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div
          className="col-md-6 p-2"
          style={{ marginBottom: "100px", border: "1px solid #84c225" }}
        >
          <div className="p-2 text-center bg-dark text-light">MY ACCOUNT</div>
          <div className="container-fluid" style={{ background: "#FF5C5C" }}>
            <div className="row p-3">
              <div className="col-md-3">
                <div className="">
                  <img
                    src={pp}
                    alt="Hii"
                    style={{ width: "80px", borderRadius: "50%" }}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <p className="text-light " style={{ fontWeight: "bold" }}>
                  {cname}
                </p>
                <p className="text-light " style={{ fontWeight: "bold" }}>
                  {cphone}
                </p>
                <p className="p-2 text-center bg-dark text-light rounded">
                  <LocationOnIcon /> {caddr}
                </p>
              </div>
              <div className="col-md-1">
                <EditIcon className="text-light" />
              </div>
              <div></div>
            </div>
          </div>

          <table class="table table-hover table-dark">
            <tbody>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/my-cart",
                    }}
                    className="text-decoration-none text-light"
                  >
                    <HistoryIcon style={{ marginRight: "10px" }} />
                    My Orders
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/my-list",
                    }}
                    className="text-decoration-none text-light"
                  >
                    <ShoppingBasketIcon style={{ marginRight: "10px" }} />
                    My Basket
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/logout",
                    }}
                    className="text-decoration-none text-light"
                  >
                    <ExitToAppIcon style={{ marginRight: "10px" }} />
                    Logout
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Account;
