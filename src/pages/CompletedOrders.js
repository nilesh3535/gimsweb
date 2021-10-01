import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Moment from "react-moment";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const token = localStorage.getItem("admintoken");
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

class CompletedOrders extends Component {
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
      Axios.put("https://gims-app.herokuapp.com/api/Completed-orders").then(
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

  orderCancelled = (oid) => {
    Axios.post("https://gims-app.herokuapp.com/api/order-cancelled", {
      ostatus: "Cancelled",
      orderid: oid,
      cndate: year + "/" + month + "/" + day,
    });
    this.props.history.push("/completed-orders");
    alert("order Cancelled");
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
              <DoneOutlineIcon style={{ color: "green" }} />
              Completed Orders
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
                  <th>Dispatched Date</th>
                  <th>Delivered Date</th>
                  <th>Delivery Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              {this.state.custorderlist ? (
                <tbody>
                  <tr>
                    <td></td>
                    <td colSpan="6" className="p-5">
                      <p className="alert alert-danger">
                        *Completed Orders empty!
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
                          {corder.orderDispatchedDate}
                        </Moment>
                      </td>
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
                          onChange={() => this.orderCancelled(corder.orderId)}
                          required
                        >
                          <option value={corder.orderStatus}>
                            {corder.orderStatus}
                          </option>
                          <option value="Order cancel">Cancel</option>
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

export default CompletedOrders;
