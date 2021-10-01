import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Axios from "axios";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CreateIcon from "@material-ui/icons/Create";
import "./ViewProducts.css";

class ViewProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      delsuccess: false,
    };
  }

  componentDidMount() {
    Axios.get("https://gims-app.herokuapp.com/api/view-prod").then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }
  deleteProduct = (id) => {
    console.log(id);
    Axios.post("https://gims-app.herokuapp.com/api/del-prod", {
      prodId: id,
    });

    this.setState({
      delsuccess: true,
    });
    alert("Product Deleted !");
    this.props.history.push("/view-prod");
  };

  updateProduct = (pid, pname, pdesc, pcat, pprice, puom, ppic) => {
    this.props.history.push({
      pathname: "/update-prod",
      state: {
        pId: pid,
        pName: pname,
        pDesc: pdesc,
        pCat: pcat,
        pPrice: pprice,
        pUOM: puom,
        pPic: ppic,
      },
    });
  };
  render() {
    const { delsuccess } = this.state;
    var cnt = 0;
    return (
      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="row">
          <div className="col-md-2"></div>
          <div
            className="col-md-7"
            style={{ border: "1px solid #84c225", paddingTop: "10px" }}
          >
            <h5
              className="alert alert-info"
              style={{ fontWeight: "bolder", textDecoration: "none" }}
            >
              View Product
            </h5>
            <Link
              to="/add-prod"
              className="btn btn-primary"
              style={{ marginLeft: "25px" }}
            >
              <AddIcon />
              Add Product
            </Link>

            {delsuccess ? (
              <p
                className="text-success alert-sm"
                style={{
                  fontStyle: "italic",
                  fontWeight: "bolder",
                  textDecoration: "underline",
                  marginLeft: "25px",
                }}
              >
                Product deleted Successfully......
              </p>
            ) : (
              ""
            )}
            <table className="table table-bordered table-responsive table-xl text-centered">
              <thead>
                <tr>
                  <th className="text-success"></th>
                  <th className="bg-success text-light">NAME</th>
                  <th className="bg-success text-light">INFO</th>
                  <th className="bg-success text-light">CATEGORY</th>
                  <th className="bg-success text-light">PRICE</th>
                  <th className="bg-success text-light">M</th>
                  <th className="bg-info text-light">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((product) => (
                  <tr>
                    <td>{(cnt = cnt + 1)}</td>
                    <td style={{ fontWeight: "bold" }}>
                      <p style={{ display: "flex" }}>{product.prodName}</p>
                      <img
                        src={require("../files/" + product.prodPic).default}
                        height={100}
                        width={100}
                        alt=""
                      />
                    </td>
                    <td>{product.prodDesc}</td>
                    <td>{product.prodCategory}</td>
                    <td>{product.prodPrice}</td>
                    <td>{product.prodUOM}</td>
                    <td>
                      <button
                        className="btn btn-warning mb-2"
                        onClick={() =>
                          this.updateProduct(
                            product.prodNo,
                            product.prodName,
                            product.prodDesc,
                            product.prodCategory,
                            product.prodPrice,
                            product.prodUOM,
                            product.prodPic
                          )
                        }
                      >
                        <CreateIcon />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteProduct(product.prodNo)}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default ViewProducts;
