import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./AuthRegister.css";
import Axios from "axios";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

class AuthRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileno: "",
      address: "",
      state: "",
      city: "",
      pin: "",
      role: "",
      errors: {},
    };
  }

  componentDidMount() {
    const { history } = this.props;
    window.addEventListener("popstate", () => {
      history.push("/account-login");
    });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formValidation = () => {
    const { mobileno, address, state, city, pin, errors } = this.state;

    let isValid = true;
    if (!Number(mobileno)) {
      errors.mnoerr = "*mobile no must be digits!";
      isValid = false;
    } else if (mobileno.length !== 10) {
      errors.mnoerr = "*mobile no is not valid!";
      isValid = false;
    }
    if (address.length < 5) {
      errors.addrerr = "*Address is too short!";
      isValid = false;
    }
    if (!String(state)) {
      errors.stateerr = "*State is not valid!";
      isValid = false;
    } else if (state.length < 4) {
      errors.stateerr = "*State is Invalid!";
      isValid = false;
    }
    if (!String(city)) {
      errors.cityerr = "*City is not valid!";
      isValid = false;
    } else if (city.length < 4) {
      errors.cityerr = "*City is Invalid!";
      isValid = false;
    }
    if (!Number(pin)) {
      errors.pinerr = "*pin code must be digits!";
      isValid = false;
    } else if (pin.length !== 6) {
      errors.pinerr = "*pin code is not valid!";
      isValid = false;
    }
    this.setState({ errors });
    return isValid;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const isValid = this.formValidation();
    if (isValid) {
      Axios.post("https://gims-app.herokuapp.com/api/g-user", {
        name: this.props.location.state.name,
        photolink: this.props.location.state.photolink,
        email: this.props.location.state.email,
        googleId: this.props.location.state.googleId,
        mobileno: this.state.mobileno,
        address: this.state.address,
        state: this.state.state,
        city: this.state.city,
        pin: this.state.pin,
        role: this.state.role,
      });
      this.props.history.push("/signin");
      alert("Your Registeration sucess ! Please Signup & Continue shopping.");
    }
  };
  render() {
    return (
      <div className="reg-container">
        <div className="reg-content-left">
          <form
            className="regform"
            onLoad={this.onPageload}
            onSubmit={this.onSubmit}
          >
            <h2>
              <InsertEmoticonIcon id="regsmileicon" />
              Welcome,<p>{this.props.location.state.name}</p>
            </h2>
            <h1>Get started with us today! Help us to know you better.</h1>
            <div className="regform-inputs">
              <label className="regform-label">Name</label>
              <input
                className="regform-input"
                type="text"
                name="name"
                value={this.props.location.state.name}
                disabled
              />
            </div>
            <div className="regform-inputs">
              <label className="regform-label">Email</label>
              <input
                className="regform-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={this.props.location.state.email}
                disabled
              />
            </div>
            <div className="regform-inputs">
              <label className="regform-label">Role</label>
              <select
                name="role"
                className="regform-select"
                onChange={this.onChange}
                required
              >
                <option value="">Select Role</option>
                <option value="CUSTOMER">CUSTOMER</option>
                <option value="RETAILER">SHOP KEEPER</option>
              </select>
            </div>
            <div className="regform-inputs">
              <label className="regform-label">Mobile</label>
              <input
                className="regform-input"
                type="text"
                name="mobileno"
                placeholder="Mobile Number"
                onChange={this.onChange}
                required
              />
              <p name="moberr">{this.state.errors["mnoerr"]}</p>
            </div>
            <div className="regform-inputs">
              <label className="regform-label">Address</label>
              <textarea
                className="reginput-area"
                rows="3"
                name="address"
                placeholder="Enter Address"
                onChange={this.onChange}
                required
              />
              <p name="addrerr">{this.state.errors["addrerr"]}</p>
            </div>
            <div className="regaddr-inputs">
              <label className="form-label">State</label>
              <label className="form-label">City</label>
              <label className="form-label">Pin</label>
              <div>
                <input
                  style={{ fontSize: "15px" }}
                  className="regstate-input"
                  type="text"
                  name="state"
                  placeholder="State"
                  onChange={this.onChange}
                  required
                />

                <input
                  style={{ fontSize: "15px" }}
                  className="regstate-input"
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={this.onChange}
                  required
                />
                <input
                  className="regstate-input"
                  style={{ fontSize: "15px" }}
                  type="text"
                  name="pin"
                  placeholder="Pincode"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="adderr">{this.state.errors["stateerr"]}</div>
              <div className="adderr">{this.state.errors["cityerr"]}</div>
              <div className="adderr">{this.state.errors["pinerr"]}</div>
            </div>

            <button className="regform-input-btn" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthRegister);
