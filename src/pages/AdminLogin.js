import React, { useState } from "react";
import NoEncryptionIcon from "@material-ui/icons/NoEncryption";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./AdminLogin.css";

const clientId =
  "1097518907177-kd6c3vg04t96pq1vhj4o55g7d6gvbfqu.apps.googleusercontent.com";
const AdminLogin = () => {
  const [details, setDetails] = useState(null);

  fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
    .then((response) => response.json())
    .then((data) => setDetails(data));

  let history = useHistory();
  // const token=localStorage.getItem("admintoken")
  // if(token==null)
  // {

  // }
  // else{
  //     history.push({
  //         pathname:'/'
  //     })
  // }

  var onSigninSuccess = (response) => {
    console.log(response);

    Axios.get("https://gims-app.herokuapp.com/admin").then((res) => {
      res.data.map((value, key) => {
        // console.log(value.userEmail)
        //console.log(response.profileObj.email)
        if (
          response.profileObj.email === value.userEmail &&
          value.userRole === "ADMIN"
        ) {
          alert("Login Success");

          localStorage.setItem("admintoken", response.profileObj.googleId);
          localStorage.setItem("adminpic", response.profileObj.imageUrl);
          localStorage.setItem("aname", response.profileObj.name);

          history.push({
            pathname: "/adminpanel",
          });
        } else {
          history.push({
            pathname: "/adminlog",
          });
        }
      });
    });
  };

  return (
    <div className="container adminlog">
      <p className="alert text-danger title">
        <NoEncryptionIcon />
        Admin
      </p>
      <p className="alert alert-danger"></p>
      <div className="row">
        <div className="col-md-5">
          <p className="text-danger" style={{ fontStyle: "italic" }}>
            if you are not admin please dont try to Login
          </p>
        </div>
        <div className="col-md-3">
          <GoogleLogin
            clientId={clientId}
            buttonText="Admin Login"
            onSuccess={onSigninSuccess}
            cookiePolicy={"single_host_origin"}
            className="btnGoogle"
          />
        </div>
        <div className="col-md-4"></div>
      </div>
      <p className="alert alert-danger"></p>
      <div className="alert alert-secondary" style={{ textAlign: "right" }}>
        {details && (
          <ul className="list-group">
            <li className="list-group-item text-primary">
              Location :{" "}
              {`${details.city}, ${details.country_name}(${details.country_code})`}
            </li>
            <li className="list-group-item text-danger">IP: {details.IPv4}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
