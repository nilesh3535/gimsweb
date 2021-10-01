import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Moment from "react-moment";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const token = localStorage.getItem("token");
// var userId = localStorage.getItem("userId");

class ViewCartOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDate: this.props.location.state.orderdate,
      orderitems: [],
    };
  }
  componentDidMount() {
    if (token == null) {
      this.props.history.push({
        pathname: "/signin",
      });
    } else {
      Axios.put("https://gims-app.herokuapp.com/api/my-cartvieworder", {
        orderid: this.props.location.state.orderid,
      }).then((res) => {
        const orderitems = res.data;

        this.setState({ orderitems });
      });
    }
  }

  render() {
    var cnt = 0;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div
            className="col-md-8 p-2"
            style={{ marginBottom: "100px", border: "1px solid #84c225" }}
          >
            <div
              className="p-2 text-center "
              style={{ background: "#84c225", fontWeight: "bold" }}
            >
              Order Details
            </div>

            <div>
              <table className="table table-bordered table-sm text-centered">
                <thead>
                  <tr>
                    <td width={10}>
                      <Link to="/my-cart" className="text-primary ">
                        <ArrowBackIcon />
                      </Link>
                      <ShoppingCartIcon style={{ color: "#84c225" }} />
                    </td>
                    <td className="">
                      <div className="d-flex flex-row-reverse">
                        <Moment
                          format="DD/MM/YYYY"
                          style={{ marginLeft: "10px" }}
                        >
                          {this.state.orderDate}
                        </Moment>
                        <p style={{ fontWeight: "bold" }}>Order Date</p>
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-3"></div>
                          <div className="col-md-3"></div>
                          <div
                            className="col-md-6"
                            style={{ borderLeft: "1px dotted gray" }}
                          >
                            <div className="d-flex">
                              <p style={{ marginRight: "40px" }}>Name</p>
                              <p>{this.props.location.state.name}</p>
                            </div>
                            <div className="d-flex">
                              <p style={{ marginRight: "35px" }}>Mobile</p>
                              <p>{this.props.location.state.phone}</p>
                            </div>
                            <div className="d-flex">
                              <p style={{ marginRight: "8px" }}>
                                Delivery Address
                              </p>
                              <p>{this.props.location.state.deliveryadd}</p>
                            </div>
                            <div className="d-flex">
                              <p style={{ marginRight: "25px" }}>Payment</p>
                              <p>Cash On delivery</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                className="p-2 text-center text-light"
                style={{ background: "#84c225", fontWeight: "bold" }}
              >
                Ordered items
              </div>
              <table className="table table-bordered table-hover table-sm text-centered">
                <thead>
                  <tr>
                    <th>-</th>
                    <th>Item</th>
                    <th>Pur.Price(Rs.)</th>
                    <th>Quantity</th>
                    <th>Item Price</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orderitems.map((oitem) => (
                    <tr>
                      <td>{(cnt = cnt + 1)}</td>
                      <td>{oitem.opNameDesc}</td>
                      <td>{oitem.opRate}</td>
                      <td>{oitem.opQty}</td>
                      <td>Rs.{oitem.opTotal}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>=</td>
                    <td></td>
                    <td colSpan="3">
                      <div>
                        <p>Total Price</p>
                        <p>Rs.{this.props.location.state.ototalprice}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p style={{ fontStyle: "italic" }}>
                  if you have any order related query please contact GIMS center
                  <Link to="/contact" style={{ marginLeft: "10px" }}>
                    Help Center
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default ViewCartOrder;
