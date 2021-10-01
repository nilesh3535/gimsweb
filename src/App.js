import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import MyList from "./pages/MyList";
import MyCart from "./pages/MyCart";
import Account from "./pages/Account";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Signin from "./pages/Signin";
import Qr from "./pages/Qr";
import AccPage from "./pages/AccPage";
import Signup from "./pages/Signup";
import AuthRegister from "./pages/AuthRegister";
import AuthRegisterfb from "./pages/AuthRegisterfb";
import AccLogout from "./pages/AccLogout";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import ProdCat from "./pages/ProdCat";
import ProdCheckout from "./pages/ProdCheckout";
import ViewCartOrder from "./pages/ViewCartOrder";

function App() {
  return (
    <>
      <Router>
        {localStorage.getItem("admintoken") ? (
          <Redirect to="/adminpanel" />
        ) : (
          <Navbar />
        )}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/prod-cat" component={ProductCategory} />
          <Route path="/my-list" component={MyList} />
          <Route path="/my-cart" component={MyCart} />
          <Route path="/view-cartorder" component={ViewCartOrder} />
          <Route path="/acc" component={Account} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/faq" component={Faq} />
          <Route path="/account-login" component={AccPage} />
          <Route path="/qr" component={Qr} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/greg" component={AuthRegister} />
          <Route path="/freg" component={AuthRegisterfb} />
          <Route path="/logout" component={AccLogout} />

          <Route path="/adminlog" component={AdminLogin} />

          <Route path="/p-cat" component={ProdCat} />
          <Route path="/checkout" component={ProdCheckout} />
          <Route path="/adminpanel" component={AdminPanel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
