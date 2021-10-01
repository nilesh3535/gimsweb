import React from "react";
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "@material-ui/icons/Facebook";

import Axios from "axios";
import { useHistory } from "react-router-dom";

import "./Signup.css";
//import FacebookIcon from '@material-ui/icons/Facebook';
import { GoogleLogin } from "react-google-login";
//import FacebookLogin from 'react-facebook-login';
import { Link } from "react-router-dom";

const clientId =
  "1097518907177-kd6c3vg04t96pq1vhj4o55g7d6gvbfqu.apps.googleusercontent.com";

const Signup = () => {
  let history = useHistory();
  const token = localStorage.getItem("token");
  if (token == null) {
  } else {
    history.push({
      pathname: "/",
    });
  }
  var onSigninSuccess = (response) => {
    console.log(response);

    Axios.get("https://gims-app.herokuapp.com/emails").then((res) => {
      res.data.map((value, key) => {
        console.log(value.userEmail);
        if (response.profileObj.email === value.userEmail) {
          alert("*Email already Registered !");
          history.push({
            pathname: "/signup",
          });
        } else {
          history.push({
            pathname: "/greg",
            state: {
              name: response.profileObj.name,
              email: response.profileObj.email,
              photolink: response.profileObj.imageUrl,
              googleId: response.profileObj.googleId,
            },
          });
        }
      });
    });
  };
  const responseFacebook = (response) => {
    console.log(response);

    Axios.get("https://gims-app.herokuapp.com/emails").then((res) => {
      res.data.map((value, key) => {
        console.log(value.userEmail);
        if (response.email === value.userEmail) {
          alert("*Email already Registered !");
          history.push({
            pathname: "/signup",
          });
        } else {
          history.push({
            pathname: "/freg",
            state: {
              name: response.name,
              email: response.email,
              photolink: response.picture.data.url,
              facebookId: response.id,
            },
          });
        }
      });
    });
  };
  return (
    <div className="signup">
      <h1>
        Get started with us today! Help us to know you better. <br />
      </h1>
      <GoogleLogin
        clientId={clientId}
        buttonText="sign up with google"
        onSuccess={onSigninSuccess}
        cookiePolicy={"single_host_origin"}
        className="btnGoogle"
      />

      <FacebookLogin
        appId="1411797922526527"
        cssClass="btnFacebook"
        fields="name,email,picture"
        //onClick={componentClicked}
        callback={responseFacebook}
        icon={<FacebookIcon />}
        textButton="&nbsp;&nbsp;Sign Up with Facebook"
      />
      <p className="noacc">
        Already have an account
        <Link to="/signin" id="diffbutton">
          SignIn
        </Link>
      </p>
    </div>
  );
};

export default Signup;
