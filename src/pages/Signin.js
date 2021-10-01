import React from "react";
import "./Signin.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const clientId =
  "1097518907177-kd6c3vg04t96pq1vhj4o55g7d6gvbfqu.apps.googleusercontent.com";

const Signin = () => {
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
        // console.log(value.userEmail)
        //console.log(response.profileObj.email)
        if (response.profileObj.email === value.userEmail) {
          alert("Login Success");

          localStorage.setItem("token", response.profileObj.googleId);
          localStorage.setItem("profilephoto", response.profileObj.imageUrl);
          localStorage.setItem("uname", response.profileObj.name);
          localStorage.setItem("userId", value.userId);
          localStorage.setItem("umail", response.profileObj.email);

          history.push({
            pathname: "/",
          });
        } else {
          // alert("*Sorry you are not registered with GIMS !");
          history.push({
            pathname: "/signup",
          });
        }
      });
    });
  };

  const resFacebook = (response) => {
    console.log(response);
    Axios.get("https://gims-app.herokuapp.com/emails").then((res) => {
      res.data.map((value, key) => {
        console.log(value.userEmail);
        console.log(response.email);
        if (response.email === value.userEmail) {
          alert("Login Success");

          localStorage.setItem("token", response.id);
          localStorage.setItem("userId", value.userId);
          localStorage.setItem("uname", response.name);

          localStorage.setItem("profilephoto", response.picture.data.url);

          history.push({
            pathname: "/",
          });
        } else {
          // alert("*Sorry you are not registered with GIMS !");
          history.push({
            pathname: "/signup",
          });
        }
      });
    });
  };
  return (
    <div className="signin">
      <h1>
        Hey Dear Welcome Back GIMS SignIn! <br />
      </h1>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign In with Google"
        onSuccess={onSigninSuccess}
        cookiePolicy={"single_host_origin"}
        className="btnGoogle"
      />
      <FacebookLogin
        appId="1411797922526527"
        cssClass="btnFacebook"
        fields="name,email,picture"
        callback={resFacebook}
        icon={<FacebookIcon />}
        textButton="&nbsp;&nbsp;Sign In with Facebook"
      />
      <p className="noacc">
        Dont have an account
        <Link to="/signup" id="diffbtn">
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default Signin;
