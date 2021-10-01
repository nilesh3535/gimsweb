import React from "react";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  return (
    <div className="container" style={{ marginBottom: "100px" }}>
      <div className="row">
        <div className="col-md-2"></div>

        <div
          className="col-md-8"
          style={{ border: "1px solid #84c225", paddingTop: "10px" }}
        >
          <h5
            className="alert  text-light"
            style={{ backgroundColor: "#84c225" }}
          >
            Shop By Category
          </h5>

          <table class="table table-hover" style={{ fontFamily: "Verdana" }}>
            <thead>
              <tr>
                <th scope="col">
                  <img
                    src={require("../files/pcategory.png").default}
                    height={40}
                    width={40}
                    style={{ marginRight: "20px" }}
                    alt=""
                  />
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/p-cat",
                      state: { cat: "Atta,Flours & Souji" },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/flour.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Atta,Flours & Souji
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{ pathname: "/p-cat", state: { cat: "Rice Product" } }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/rice.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Rice Product
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/p-cat",
                      state: { cat: "Salt,Sugar & Jaggery" },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/sugar.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Salt,Sugar & Jaggery
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link
                    to={{ pathname: "/p-cat", state: { cat: "Stationary" } }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/stationary.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Stationary
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{ pathname: "/p-cat", state: { cat: "Breads" } }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/bread.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Breads
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{ pathname: "/p-cat", state: { cat: "Bath" } }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/bathtub.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Bath
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/p-cat",
                      state: { cat: "Chocolates & Biscuits" },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/chocolate.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Chocolates & Biscuits
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/p-cat",
                      state: { cat: "Cookies & Khari" },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/cookies.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Cookies & Khari
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/p-cat",
                      state: { cat: "Foodgrains, Oil & Masala" },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/oil.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Foodgrains, Oil & Masala
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/p-cat",
                      state: { cat: "Backery & Dairy" },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/dairy.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Backery & Dairy
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{ pathname: "/p-cat", state: { cat: "Beverage" } }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/tea.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Beverage
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{ pathname: "/p-cat", state: { cat: "Snacks" } }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/snacks.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Snacks
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/p-cat",
                      state: { cat: "Cleaning & HouseHold" },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/cleaning.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Cleaning & HouseHold
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: "/p-cat",
                      state: { cat: "Gourment & world food" },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/worldFood.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Gourment & world food
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to={{ pathname: "/p-cat", state: { cat: "Baby Care" } }}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={require("../files/babyCare.png").default}
                      height={40}
                      width={40}
                      style={{ marginRight: "20px" }}
                      alt=""
                    />
                    Baby Care
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default ProductCategory;
