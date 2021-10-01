import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import ListAltIcon from "@material-ui/icons/ListAlt";

import "./AddProducts.css";

class AddProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pname: "",
      pdesc: "",
      pcat: "",
      pprice: "",
      puom: "",
      ppic: "",
      success: false,
      error: {},
    };
  }
  onChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFile = (e) => {
    this.setState({
      ppic: e.target.files[0].name,
    });
    console.log(e.target.files[0]);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    console.log(data);
    Axios.post("https://gims-app.herokuapp.com/api/acc-details/upload", data);
  };

  formVal = () => {
    const { pname, pprice, error } = this.state;

    let isValid = true;
    if (pname.length < 4) {
      error.pnameerr = "*Product Name is too short!";
      isValid = false;
    }

    if (!Number(pprice)) {
      error.ppriceerr = "*price must be digits!";
      isValid = false;
    }
    error.addsuccess = "*New Product Added...";

    this.setState({ error });
    this.setState({
      success: true,
    });
    return isValid;
  };

  onAdd = (e) => {
    e.preventDefault();

    const isValid = this.formVal();
    if (isValid) {
      Axios.post("https://gims-app.herokuapp.com/api/add-prod", {
        pname: this.state.pname,
        pdesc: this.state.pdesc,
        pcat: this.state.pcat,
        pprice: this.state.pprice,
        puom: this.state.puom,
        ppic: this.state.ppic,
      });

      this.props.history.push("/add-prod");
      alert("New Product Added !");
    }
  };

  render() {
    const { success } = this.state;

    return (
      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="row">
          <div className="col-md-3"></div>
          <div
            className="col-md-6"
            style={{ border: "1px solid #84c225", paddingTop: "10px" }}
          >
            <h5
              className="alert alert-info"
              style={{ fontWeight: "bolder", textDecoration: "none" }}
            >
              Add Product
            </h5>

            <form onSubmit={this.onAdd}>
              {success ? (
                <p
                  className="text-success alert-sm"
                  style={{
                    fontStyle: "italic",
                    fontWeight: "bolder",
                    textDecoration: "underline",
                  }}
                >
                  {this.state.error["addsuccess"]}
                  <Link to="/view-prod" className="text-info">
                    click here to view
                  </Link>
                </p>
              ) : (
                <Link
                  to="/view-prod"
                  className="btn btn-primary"
                  style={{ marginLeft: "25px" }}
                >
                  <ListAltIcon />
                  View Product
                </Link>
              )}

              <table className="table table-bordered table-responsive table-xl text-centered">
                <thead>
                  <tr>
                    <th className="text-success"></th>
                    <th className="bg-success text-light">PRODUCT INFO</th>
                    <th className="bg-success text-light">Enter Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-success">1</td>
                    <td className="pinfo">Product Name</td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        name="pname"
                        placeholder="Product Name"
                        onChange={this.onChanges}
                        required
                      />
                      <p className="text-danger" name="pnameerr">
                        {this.state.error["pnameerr"]}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-success">2</td>
                    <td className="pinfo">Product Description</td>
                    <td>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="pdesc"
                        placeholder="Product Description"
                        onChange={this.onChanges}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-success">3</td>
                    <td className="pinfo">Product Category</td>
                    <td>
                      <select
                        className="form-select"
                        name="pcat"
                        onChange={this.onChanges}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="Atta,Flours & Souji">
                          Atta,Flours & Souji
                        </option>
                        <option value="Rice Product">Rice Product</option>
                        <option value="Salt,Sugar & Jaggery">
                          Salt,Sugar & Jaggery
                        </option>
                        <option value="Dairy">Dairy</option>
                        <option value="Stationary">Stationary</option>
                        <option value="Breads">Breads</option>
                        <option value="Bath">Bath</option>
                        <option value="Chocolates & Biscuits">
                          Chocolates & Biscuits
                        </option>
                        <option value="Cookies & Khari">Cookies & Khari</option>
                        <option value="Foodgrains, Oil & Masala">
                          Foodgrains, Oil & Masala
                        </option>
                        <option value="Backery & Dairy">Backery & Dairy</option>
                        <option value="Beverage">Beverage</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Cleaning & HouseHold">
                          Cleaning & HouseHold
                        </option>
                        <option value="Gourment & world food">
                          Gourment & world food
                        </option>
                        <option value="Baby Care">Baby Care</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-success">4</td>
                    <td className="pinfo">Product Price</td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        name="pprice"
                        placeholder="Product Price (in rupees)"
                        onChange={this.onChanges}
                        required
                      />
                      (in rupees)
                      <p className="text-danger" name="ppriceerr">
                        {this.state.error["ppriceerr"]}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-success">5</td>
                    <td className="pinfo">
                      Product UOM
                      <br />
                      (Unit of Measurement)
                    </td>
                    <td>
                      <select
                        className="form-select"
                        name="puom"
                        onChange={this.onChanges}
                        required
                      >
                        <option value="">Select UOM</option>
                        <option value="g"> g</option>
                        <option value="kg">kg</option>
                        <option value="l"> l</option>
                        <option value="ml">ml</option>
                        <option value="pcs">pcs-piece</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-success">6</td>
                    <td className="pinfo">Product picture</td>
                    <td>
                      <input
                        type="file"
                        name="ppic"
                        class="form-control-file"
                        id="exampleFormControlFile1"
                        onChange={this.onFile}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button class="btn btn-success btn-block" type="submit">
                        Add
                      </button>
                    </td>
                    <td>
                      <input
                        class="btn btn-danger"
                        type="reset"
                        value="Reset"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default AddProducts;
