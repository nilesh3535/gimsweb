import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import Axios from "axios";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
var token = localStorage.getItem("token");
// var pp = localStorage.getItem("profilephoto");
var userid = localStorage.getItem("userId");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      itemcount: "",
      qty: "",
      display: false,
    };
  }

  componentDidMount() {
    Axios.get("https://gims-app.herokuapp.com/api/view-prod", {
      crossdomain: true,
    }).then((res) => {
      const products = res.data;
      this.setState({ products });
    });
    if (token === null) {
      this.setState({
        display: false,
      });
    } else {
      this.setState({
        display: true,
      });

      Axios.put("https://gims-app.herokuapp.com/api/count-list", {
        id: userid,
      }).then((response) => {
        this.setState({
          itemcount: response.data[0].itemcnt,
        });
      });
    }
  }

  onQtyChange = (e) => {
    this.setState({
      qty: e.target.value,
    });
  };

  addToList = (id) => {
    if (token == null) {
      alert("*Please Signin first");
      this.props.history.push("/signin");
    } else {
      Axios.post("https://gims-app.herokuapp.com/api/add-list", {
        prodId: id,
        qty: this.state.qty,
        uId: localStorage.getItem("userId"),
      });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div
        className="container home"
        style={{ marginBottom: "100px", border: "1px solid #84c225" }}
      >
        <div className="row">
          <div
            className="col-md-12 productbox"
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            <div className="d-flex">
              <div style={{ marginRight: "auto" }}>
                <Link to="/prod-cat" style={{ textDecoration: "none" }}>
                  <h5
                    className="alert text-light p-2"
                    style={{ backgroundColor: "#84c225" }}
                  >
                    Shop By Category{" "}
                    <ArrowDropDownCircleIcon style={{ fontSize: "22px" }} />
                  </h5>
                </Link>
              </div>
              <div className="p-1">
                {this.state.display ? (
                  <Link
                    to="/my-list"
                    style={{
                      textDecoration: "none",
                      border: "1px solid #d9534f",
                      borderRadius: "5px",
                    }}
                    className="p-2 text-dark "
                  >
                    <img
                      src={require("../files/basket.png").default}
                      height={30}
                      width={30}
                      alt=""
                    />
                    {this.state.itemcount} items
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>

            <table
              className="d-flex flex-wrap"
              style={{ padding: "10px 0px 10px 40px" }}
            >
              {this.state.products.map((product) => (
                <div
                  className="p-3 mb-3"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 0 10px gray",
                    marginRight: "20px",
                    width: "180px",
                  }}
                >
                  <div
                    className="text-center mb-3 p-3"
                    style={{ borderRadius: "10px", boxShadow: "0 0 5px gray" }}
                  >
                    <img
                      src={require("../files/" + product.prodPic).default}
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p style={{ fontWeight: "bold", height: "30px" }}>
                      {product.prodName}
                    </p>

                    <p className="text-success" style={{ fontSize: "12px" }}>
                      details
                      <ArrowDropDownCircleIcon style={{ fontSize: "12px" }} />
                    </p>

                    <p id="desc" style={{ fontSize: "12px", height: "30px" }}>
                      {product.prodDesc}
                    </p>

                    <p className=" text-secondary">{product.prodUOM}</p>
                    <div style={{ display: "flex" }}>
                      <p style={{ marginRight: "5px" }}>Rs</p>
                      <p style={{ fontWeight: "bold" }} className="d-flex">
                        {product.prodPrice}{" "}
                        <p
                          style={{
                            textDecorationLine: "line-through",
                            marginLeft: "20px",
                          }}
                        >
                          Rs {product.prodPrice + 5}
                        </p>
                      </p>{" "}
                    </div>
                  </div>
                  <form onSubmit={() => this.addToList(product.prodNo)}>
                    <div className="d-flex justify-content-center">
                      quantity
                      <input
                        type="number"
                        min="1"
                        placeholder="1"
                        style={{ width: "40px" }}
                        name="qty"
                        onChange={this.onQtyChange}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <input
                        id="addc"
                        style={{
                          border: "1px solid #ba5253",
                          borderRadius: "2px",
                          width: "100px",
                          background: "#d9534f",
                        }}
                        className="mt-3 text-light"
                        type="submit"
                        value="Add"
                      />
                    </div>
                  </form>
                </div>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
