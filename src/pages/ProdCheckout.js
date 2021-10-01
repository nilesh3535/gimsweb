import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Axios from "axios";
var uname = localStorage.getItem("uname");
var userId = localStorage.getItem("userId");

const token = localStorage.getItem("token");
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

class ProdCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      upUid: userId,
      daddress: "",
      errors: {},
    };
  }
  componentDidMount() {
    {
      const { history } = this.props;
      window.addEventListener("popstate", () => {
        history.push("/");
      });
    }
    if (token == null) {
      this.props.history.push({
        pathname: "/signin",
      });
    } else {
      Axios.put("https://gims-app.herokuapp.com/api/cust-details", {
        cname: uname,
      }).then((res) => {
        this.setState({
          name: res.data[0].custName,
          phone: res.data[0].custPhone,
        });
      });
    }
  }
  onDaddChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  formValidation = () => {
    const { daddress, errors } = this.state;

    let isValid = true;
    if (daddress.length < 6) {
      errors.adderr =
        "*Please Enter Full Delivery address! flat no/building name area/colony/road city";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };
  onDelivery = (e) => {
    e.preventDefault();

    const isValid = this.formValidation();

    if (isValid) {
      Axios.post("https://gims-app.herokuapp.com/api/order", {
        address: this.state.daddress,
        name: this.state.name,
        phone: this.state.phone,
        odate: year + "/" + month + "/" + day,
        totalprice: this.props.location.state.totalprice,
        uid: this.state.upUid,
      });
      this.props.history.push("/my-cart");
      alert("Your Order Placed..Please Check Order Status");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div
            className="col-md-8 p-2"
            style={{ marginBottom: "100px", border: "2px solid #84c225" }}
          >
            <div
              className="p-2 text-center "
              style={{ background: "#84c225", fontWeight: "bold" }}
            >
              <ShoppingCartIcon className="text-success" /> Order Checkout
            </div>

            <div>
              <form onSubmit={this.onDelivery}>
                <table className="table table-bordered  table-sm text-centered">
                  <thead>
                    <tr>
                      <th width={10}>
                        <Link to="/my-list" className="text-primary ">
                          <ArrowBackIcon className="text-danger" />
                        </Link>
                      </th>
                      <th colSpan="2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ShoppingCartIcon className="text-success" />
                      </td>
                      <td colSpan="2" className="p-1 d-flex flex-row-reverse">
                        <Moment format="DD/MM/YYYY">
                          {new Date().toLocaleString()}
                        </Moment>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className="d-flex m-2">
                          <p
                            className="text-success"
                            style={{ paddingRight: "35px" }}
                          >
                            Name
                          </p>
                          <p className="text-dark">{this.state.name}</p>
                        </div>
                        <div className="d-flex p-2">
                          <p
                            className="text-success"
                            style={{ paddingRight: "29px" }}
                          >
                            Mobile
                          </p>
                          <p className="text-dark">{this.state.phone}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan="2"></td>
                      <td className="d-flex">
                        <p className="text-success">Delivery Address</p>
                        <textarea
                          className=""
                          onChange={this.onDaddChange}
                          style={{ width: "100%" }}
                          rows="3"
                          name="daddress"
                          placeholder="flat no/building name ,
                        area/colony/road,
                        city"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          className="text-danger"
                          style={{ paddingLeft: "90px" }}
                        >
                          {this.state.errors["adderr"]}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="p-2">
                        <p className="text-success">Cash On Delivery</p>
                        <p className="d-flex btn">
                          Total price
                          <p
                            style={{ marginLeft: "5px" }}
                            className="text-danger"
                          >
                            Rs.{this.props.location.state.totalprice}
                          </p>
                        </p>
                        <Link
                          to="/my-list"
                          className="btn btn-danger"
                          style={{ marginRight: "10px" }}
                        >
                          Cancel
                          <RemoveShoppingCartIcon />
                        </Link>

                        <button className="btn btn-success" type="submit">
                          Proceed Order
                          <ShoppingCartIcon className="text-light" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default ProdCheckout;
