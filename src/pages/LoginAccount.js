import React, { Component } from "react";

import "./LoginAccount.css";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Axios from "axios";
import AuthRegister from "./AuthRegister";
const clientId =
  "1097518907177-kd6c3vg04t96pq1vhj4o55g7d6gvbfqu.apps.googleusercontent.com";
class LoginAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
      fbLoggedIn: false,
      nameValue: "",

      photolink: "",
      email: "",
      googleId: "",
    };
  }

  render() {
    var onLoginSuccess = (response) => {
      console.log(response);
      Axios.post("https://gims-app.herokuapp.com/api/g-user", {
        name: response.profileObj.name,
        photolink: response.profileObj.imageUrl,
        email: response.profileObj.email,
        googleId: response.profileObj.googleId,
      }).then({});
      this.setState({
        isLoggedin: true,
        nameValue: response.profileObj.name,
        photolink: response.profileObj.imageUrl,
        email: response.profileObj.email,
        googleId: response.profileObj.googleId,
      });
    };

    const componentClicked = (data) => {
      console.log("data", data);
    };

    const responseFacebook = (response) => {
      Axios.post("https://gims-app.herokuapp.com/api/fb-user", {
        name: response.name,
        photolink: response.picture.data.url,
        email: response.email,
        fbId: response.id,
      }).then({});
      console.log(response);
      if (response.accessToken == undefined) {
        this.setState({
          fbLoggedin: false,
        });
      } else {
        this.setState({
          fbLoggedin: true,
        });
      }
    };

    return (
      <div className="log-reg">
        {this.state.isLoggedin ? (
          <AuthRegister
            nameValue={this.state.nameValue}
            photolink={this.state.photolink}
            email={this.state.email}
            googleId={this.state.googleId}
          />
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign In with Google"
            onSuccess={onLoginSuccess}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        )}

        {/* { this.state.fbLoggedin ? 'welcome' :
            
             <FacebookLogin
              appId="1411797922526527"
               
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
             />

             } */}
      </div>
    );
  }
}
export default LoginAccount;
