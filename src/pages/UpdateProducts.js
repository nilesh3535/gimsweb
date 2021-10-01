import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "./AddProducts.css";

const UpdateProducts = (props) => {
  const [pname, setPname] = useState(props.location.state.pName);
  const [pdesc, setPdesc] = useState(props.location.state.pDesc);
  const [pcat, setPcat] = useState(props.location.state.pCat);
  const [pprice, setPprice] = useState(props.location.state.pPrice);
  const [puom, setPuom] = useState(props.location.state.pUOM);
  const [ppic, setPpic] = useState(props.location.state.pPic);

  var onChangePname = (event) => {
    props.location.state.pName = event.target.value;
    setPname(event.target.value);
  };
  var onChangePdesc = (event) => {
    props.location.state.pDesc = event.target.value;
    setPdesc(event.target.value);
  };
  var onChangePcat = (event) => {
    props.location.state.pCat = event.target.value;
    setPcat(event.target.value);
  };
  var onChangePprice = (event) => {
    props.location.state.pPrice = event.target.value;
    setPprice(event.target.value);
  };
  var onChangePuom = (event) => {
    props.location.state.pUOM = event.target.value;
    setPuom(event.target.value);
  };
  var onFileChange = (e) => {
    props.location.state.pPic = e.target.files[0];

    setPpic(e.target.files[0].name);

    console.log(e.target.files[0]);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    console.log(data);
    Axios.post("https://gims-app.herokuapp.com/upload", data);
  };

  var onUpdate = (e) => {
    e.preventDefault();
    Axios.post("https://gims-app.herokuapp.com/api/update-prod", {
      pid: props.location.state.pId,
      pname: pname,
      pdesc: pdesc,
      pcat: pcat,
      pprice: pprice,
      puom: puom,
      ppic: ppic,
    });

    props.history.push("/view-prod");
    alert("Product Updated !");
  };

  return (
    <div className="container" style={{ marginBottom: "100px" }}>
      <div className="row">
        <div className="col-md-3"></div>
        <div
          className="col-md-6"
          style={{ border: "1px solid #84c225", paddingTop: "10px" }}
        >
          <h5
            className="alert alert-warning"
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
          >
            UPDATE PRODUCT
          </h5>

          <form onSubmit={onUpdate}>
            <Link
              to="/view-prod"
              className="btn btn-info"
              style={{ marginLeft: "25px" }}
            >
              CANCEL
            </Link>

            <table className="table table-bordered table-responsive table-xl text-centered">
              <thead>
                <tr>
                  <th className="text-success"></th>
                  <th className="bg-warning">PRODUCT INFO</th>
                  <th className="bg-warning">Enter Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-danger">1</td>
                  <td className="pinfo">Product Name</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      name="pname"
                      placeholder="Product Name"
                      onChange={onChangePname}
                      value={props.location.state.pName}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-danger">2</td>
                  <td className="pinfo">Product Description</td>
                  <td>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="pdesc"
                      placeholder="Product Description"
                      value={props.location.state.pDesc}
                      onChange={onChangePdesc}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-danger">3</td>
                  <td className="pinfo">Product Category</td>
                  <td>
                    <select
                      className="form-select"
                      name="pcat"
                      onChange={onChangePcat}
                      required
                    >
                      <option value={props.location.state.pCat}>
                        {props.location.state.pCat}
                      </option>
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
                  <td className="text-danger">4</td>
                  <td className="pinfo">Product Price</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      name="pprice"
                      placeholder="Product Price (in rupees)"
                      value={props.location.state.pPrice}
                      onChange={onChangePprice}
                      required
                    />
                    (in rupees)
                  </td>
                </tr>
                <tr>
                  <td className="text-danger">5</td>
                  <td className="pinfo">
                    Product UOM
                    <br />
                    (Unit of Measurement)
                  </td>
                  <td>
                    <select
                      className="form-select"
                      name="puom"
                      onChange={onChangePuom}
                      required
                    >
                      <option value={props.location.state.pUOM}>
                        {props.location.state.pUOM}
                      </option>
                      <option value="g"> g</option>
                      <option value="kg">kg</option>
                      <option value="l"> l</option>
                      <option value="ml">ml</option>
                      <option value="pcs">pcs-piece</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="text-danger">6</td>
                  <td className="pinfo">Product picture</td>
                  <td>
                    <input
                      type="file"
                      name="ppic"
                      class="form-control-file"
                      id="exampleFormControlFile1"
                      onChange={onFileChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button class="btn btn-warning btn-block" type="submit">
                      Update
                    </button>
                  </td>
                  <td>
                    <Link
                      to="/view-prod"
                      className="btn btn-info"
                      style={{ marginLeft: "25px" }}
                    >
                      CANCEL
                    </Link>
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
};

export default UpdateProducts;
