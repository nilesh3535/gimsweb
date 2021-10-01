import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Moment from "react-moment";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const token = localStorage.getItem("token");
var userId = localStorage.getItem("userId");

class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      itemcount: "",
      emptyorderlist: false,
      orderstatus: false,
    };
  }
  componentDidMount() {
    if (token == null) {
      this.props.history.push({
        pathname: "/signin",
      });
    } else {
      Axios.put("https://gims-app.herokuapp.com/api/my-orders", {
        id: userId,
      }).then((res) => {
        const orders = res.data;
        if (orders.length === 0) {
          this.setState({ emptyorderlist: true });
        }

        this.setState({ orders });
      });
    }
  }
  showOrderStatus = () =>
    this.setState({ orderstatus: !this.state.orderstatus });

  viewOrder = (id, odate, dadd, name, phone, totalprice) => {
    console.log(id);

    this.props.history.push({
      pathname: "/view-cartorder",
      state: {
        orderid: id,
        orderdate: odate,
        deliveryadd: dadd,
        name: name,
        phone: phone,
        ototalprice: totalprice,
      },
    });
  };

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
              <ShoppingCartIcon className="text-success" />
              My Order
            </div>
            <div>
              <table className="table table-bordered table-sm text-centered">
                <thead>
                  <tr>
                    <th width={10}>
                      <Link to="/" className="text-primary ">
                        <ArrowBackIcon />
                      </Link>
                    </th>
                    <th>
                      <Link
                        to="/my-list"
                        className="text-primary text-decoration-none d-flex flex-row-reverse"
                      >
                        <button
                          className="btn d-flex "
                          style={{
                            textDecoration: "none",
                            border: "1px solid #d9534f",
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={require("../files/basket.png").default}
                            height={30}
                            width={30}
                            className="d-flex flex-row"
                            alt=""
                          />
                          <p>Basket</p>
                        </button>
                      </Link>
                    </th>
                  </tr>
                </thead>
                {this.state.emptyorderlist ? (
                  <tbody>
                    <tr>
                      <td>
                        <ShoppingCartIcon style={{ color: "#84c225" }} />
                      </td>
                      <td className="p-1 text-success">My order</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="p-5">
                        <div
                          className="text-danger"
                          style={{ fontStyle: "italic" }}
                        >
                          You not Ordered yet with GIMS!
                        </div>

                        <Link to="/" className="text-primary ">
                          <button
                            className="btn "
                            style={{
                              color: "#84c225",
                              border: "1px solid #84c225",
                            }}
                          >
                            Continue <ShoppingBasketIcon />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td>
                        <ShoppingCartIcon style={{ color: "#84c225" }} />
                      </td>
                      <td className="p-1 text-success">My order</td>
                    </tr>

                    {this.state.orders.map((order) => (
                      <tr>
                        <td>{(cnt = cnt + 1)}</td>
                        <td className="d-flex">
                          <div className="container border border-success rounded ">
                            <div className="row">
                              <div className="col-md-2 p-2">
                                <ShoppingCartIcon
                                  style={{
                                    fontSize: "70px",
                                    color: "#84c225",
                                  }}
                                />
                              </div>
                              <div className="col-md-5 p-2">
                                <p
                                  className="d-flex"
                                  style={{ fontWeight: "bold", color: "green" }}
                                >
                                  GIMS order on
                                  <p
                                    className="text-danger"
                                    style={{ marginLeft: "5px" }}
                                  >
                                    <Moment format="DD/MM/YYYY">
                                      {order.orderDate}
                                    </Moment>
                                  </p>
                                </p>
                                <p
                                  className="d-flex rounded text-danger"
                                  style={{
                                    height: "30px",
                                    width: "100px",
                                    fontWeight: "bold",
                                    paddingLeft: "5px",
                                    background: "#84c225",
                                  }}
                                >
                                  <p className="text-dark">Rs.</p>
                                  {order.orderTotalPrice}
                                </p>
                              </div>
                              <div className="col-md-5 p-2">
                                <div className="p-1">
                                  <button
                                    className="btn btn-warning"
                                    style={{ marginRight: "5px" }}
                                    onClick={this.showOrderStatus}
                                  >
                                    order status
                                    <ArrowForwardIosIcon
                                      style={{ fontSize: "12px" }}
                                    />
                                  </button>

                                  <button
                                    className="btn btn-success"
                                    onClick={() =>
                                      this.viewOrder(
                                        order.orderId,
                                        order.orderDate,
                                        order.orderDeliveryAddr,
                                        order.orderCustName,
                                        order.orderCustPhone,
                                        order.orderTotalPrice
                                      )
                                    }
                                  >
                                    order details
                                    <ArrowForwardIosIcon
                                      style={{ fontSize: "12px" }}
                                    />
                                  </button>
                                  {this.state.orderstatus ? (
                                    <p
                                      className="p-1 text-danger"
                                      style={{ fontStyle: "italic" }}
                                    >
                                      Your order {order.orderStatus}.!
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default MyCart;
