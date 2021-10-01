import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Moment from "react-moment";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PrintIcon from "@material-ui/icons/Print";
const token = localStorage.getItem("admintoken");

class ViewFullCompletedOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDate: this.props.location.state.odate,
      orderfullinfo: [],
    };
  }
  componentDidMount() {
    if (token == null) {
      this.props.history.push({
        pathname: "/adminlogin",
      });
    } else {
      Axios.put("https://gims-app.herokuapp.com/api/view-fullorderdetails", {
        orderid: this.props.location.state.oid,
      }).then((res) => {
        const orderfullinfo = res.data;

        this.setState({ orderfullinfo });
      });
    }
  }

  printO() {
    var printContents = document.getElementById("printthis").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
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
            <div className="d-flex flex-row-reverse">
              <p onClick={() => this.printO()} style={{ cursor: "pointer" }}>
                <PrintIcon />
              </p>
            </div>
            <div id="printthis">
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
                        <Link to="/completed-orders" className="text-primary ">
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

                            <div id="printthis" className="col-md-6">
                              <table className="table table-bordered text-centered border border-dark">
                                <tr>
                                  <td className="p-2">OrderNo</td>
                                  <td className="p-2">
                                    #gimso{this.props.location.state.oid}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-2">Name</td>
                                  <td className="p-2">
                                    {this.props.location.state.cname}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-2">Delivery Address</td>
                                  <td className="p-2">
                                    {this.props.location.state.deliveryadd}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-2">Cash On Delivery</td>
                                  <td className="p-2">
                                    Rs.{this.props.location.state.ototalprice}
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  className="p-2 text-center text-dark"
                  style={{ fontWeight: "bold" }}
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
                    {this.state.orderfullinfo.map((oitem) => (
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
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewFullCompletedOrder;
