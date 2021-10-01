import React, { Component } from "react";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import Axios from "axios";
var userid = localStorage.getItem("userId");

const token = localStorage.getItem("token");

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      itemcount: "",
      emptylist: false,
      delsuccess: false,
      display: false,
      emptylist: false,
    };
  }

  componentDidMount() {
    if (token == null) {
      this.props.history.push({
        pathname: "/signin",
      });
    } else {
      Axios.put("https://gims-app.herokuapp.com/api/my-list", {
        id: userid,
      }).then((res) => {
        const products = res.data;
        if (products.length === 0) {
          this.setState({ emptylist: true });
        }

        this.setState({ products });
      });
    }
  }

  remProdFromList = (id) => {
    //console.log(id);
    Axios.post("https://gims-app.herokuapp.com/api/remlist-prod", {
      upNo: id,
    });
  };
  render() {
    var cnt = 0;
    var ptot = 0;
    var totprice = 0;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div
            className="col-md-8 p-2"
            style={{ marginBottom: "100px", border: "1px solid #84c225" }}
          >
            <div
              className="p-2 text-center"
              style={{ background: "#84c225", fontWeight: "bold" }}
            >
              <img
                src={require("../files/basket.png").default}
                height={30}
                width={30}
                alt=""
              />
              Review List
            </div>
            {this.state.delsuccess ? (
              <p
                className="text-success alert-sm"
                style={{
                  fontStyle: "italic",
                  fontWeight: "bolder",
                  textDecoration: "underline",
                  marginLeft: "25px",
                }}
              >
                Product Removed From List
              </p>
            ) : (
              ""
            )}
            <div>
              <table className="table table-bordered table-sm text-centered">
                <thead>
                  <tr>
                    <th width={10}>
                      <Link to="/" className="text-primary ">
                        <ArrowBackIcon />
                      </Link>
                    </th>
                    <th colSpan="2">
                      <Link
                        to="/my-cart"
                        className="text-primary text-decoration-none d-flex flex-row-reverse"
                      >
                        <button
                          className="btn text-light"
                          style={{ background: "#84c225" }}
                        >
                          Your Order
                          <ShoppingCartIcon />
                        </button>
                      </Link>
                    </th>
                  </tr>
                </thead>
                {this.state.emptylist ? (
                  <tbody>
                    <tr>
                      <td>
                        <ListAltIcon />
                      </td>
                      <td
                        colSpan="2"
                        style={{ background: "#DCDCDC" }}
                        className="p-1"
                      >
                        My List
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="p-5 ">
                        <div className="text-danger">
                          <img
                            src={require("../files/basket.png").default}
                            height={30}
                            width={30}
                            alt=""
                          />
                          Your Basket List is Empty
                        </div>

                        <Link to="/" className="text-primary">
                          <button className="btn btn-success m-3">
                            <PlaylistAddIcon /> Create List
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td>
                        <ListAltIcon />
                      </td>
                      <td
                        colSpan="2"
                        style={{ background: "#DCDCDC" }}
                        className="p-1"
                      >
                        My List
                      </td>
                    </tr>

                    {this.state.products.map((product) => (
                      <tr>
                        <td>{(cnt = cnt + 1)}</td>

                        <td className="d-flex">
                          <div style={{ width: "120px" }}>
                            <img
                              src={
                                require("../files/" + product.prodPic).default
                              }
                              height={100}
                              width={100}
                              alt=""
                            />
                            <p style={{ fontWeight: "bold" }}>
                              {product.prodName}
                            </p>
                          </div>
                          <div style={{ marginLeft: "30px" }}>
                            <p>{product.prodDesc}</p>
                            <p
                              style={{ fontWeight: "bold" }}
                              className="d-flex"
                            >
                              Quantity-
                              <p className="text-danger">{product.upQty}</p>
                            </p>
                            <p
                              style={{ fontWeight: "bold" }}
                              className=" d-flex"
                            >
                              <p className="text-dark">Rs.</p>
                              <p className="text-secondary">
                                {product.prodPrice}
                              </p>
                              <p style={{ marginLeft: "5px" }}>X</p>
                              <p
                                style={{ marginLeft: "5px" }}
                                className="text-danger"
                              >
                                {product.upQty}
                              </p>
                              <p style={{ marginLeft: "5px" }}>=</p>
                              <p
                                style={{ marginLeft: "5px" }}
                                className="text-success"
                              >
                                {(ptot = product.prodPrice * product.upQty)} Rs
                                <p hidden>{(totprice += ptot)}</p>
                              </p>
                            </p>
                          </div>
                        </td>
                        <td className="text-center pt-5">
                          <button
                            className="btn btn-danger"
                            onClick={() => this.remProdFromList(product.upNo)}
                          >
                            <DeleteOutlineIcon />
                          </button>
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td></td>
                      <td colSpan="2">
                        <Link to="/" className="text-primary">
                          <button className="btn btn-success m-3">
                            <PlaylistAddIcon /> Add more items
                          </button>
                        </Link>
                        <p className="alert alert-danger">
                          Total
                          <p className="text-danger">Rs {totprice}</p>
                          <Link
                            to={{
                              pathname: "/checkout",
                              state: { totalprice: totprice, custId: userid },
                            }}
                            className="btn btn-success"
                          >
                            CheckOut <ShoppingCartIcon />
                          </Link>
                        </p>
                      </td>
                    </tr>
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

export default MyList;
