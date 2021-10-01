import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Moment from "react-moment";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const token = localStorage.getItem("admintoken");

class CancelledOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custorders: [],
      custorderlist: false,
    };
  }
  componentDidMount() {
    if (token == null) {
      this.props.history.push({
        pathname: "/adminlogin",
      });
    } else {
      Axios.put("https://gims-app.herokuapp.com/api/Cancelled-orders").then(
        (res) => {
          const custorders = res.data;
          if (custorders.length === 0) {
            this.setState({ custorderlist: true });
          }

          this.setState({ custorders });
        }
      );
    }
  }

  fullorderdetails = (id, odate, dadd, cname, phone, totalprice) => {
    console.log(id);

    this.props.history.push({
      pathname: "/view-fulldispatchedorder",
      state: {
        oid: id,
        odate: odate,
        deliveryadd: dadd,
        cname: cname,
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
              className="p-2 text-center text-dark"
              style={{ background: "#84c225", fontWeight: "bold" }}
            >
              <RemoveShoppingCartIcon style={{ color: "green" }} />
              Cancelled Orders
            </div>
            <div
              className="p-2 d-flex flex-row-reverse"
              style={{ fontWeight: "bold" }}
            >
              <Moment format="DD/MM/YYYY">{new Date().toLocaleString()}</Moment>
              Today,
            </div>
            <table className="table table-bordered  table-sm text-centered">
              <thead>
                <tr>
                  <th>
                    <Link to="/adminpanel" className="text-primary ">
                      <ArrowBackIcon />
                    </Link>
                  </th>
                  <th width={10}>Ordered Date</th>
                  <th>Name</th>
                  <th>Order Cancelled Date</th>
                  <th>Delivery Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              {this.state.custorderlist ? (
                <tbody>
                  <tr>
                    <td></td>
                    <td colSpan="5" className="p-5">
                      <p className="alert alert-danger">
                        *Cancelled Orders empty!
                      </p>
                      <Link
                        to="/view-custorders"
                        className="text-success btn "
                        style={{ background: "#84c225" }}
                      >
                        <ShoppingCartIcon className="" />
                        Customer orders
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {this.state.custorders.map((corder) => (
                    <tr>
                      <td>{(cnt = cnt + 1)}</td>
                      <td>
                        <Moment format="DD/MM/YYYY">{corder.orderDate}</Moment>
                      </td>
                      <td>{corder.orderCustName}</td>

                      <td>
                        <Moment format="DD/MM/YYYY">
                          {corder.orderDeliveredDate}
                        </Moment>
                      </td>
                      <td>{corder.orderDeliveryAddr}</td>
                      <td className="p-3">
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            this.fullorderdetails(
                              corder.orderId,
                              corder.orderDate,
                              corder.orderDeliveryAddr,
                              corder.orderCustName,
                              corder.orderCustPhone,
                              corder.orderTotalPrice
                            )
                          }
                        >
                          View
                        </button>
                        <select
                          name="orderstatus"
                          style={{ marginTop: "10px" }}
                          className="form-control"
                          required
                        >
                          <option value={corder.orderStatus}>
                            {corder.orderStatus}
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default CancelledOrders;
