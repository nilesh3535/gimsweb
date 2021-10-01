import React from "react";
import "./ContactUs.css";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import BusinessIcon from "@material-ui/icons/Business";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="container contact-container" style={{ marginTop: "20px" }}>
      <div className="ctitle">
        <h4>
          <ContactSupportIcon />
          ContactUs
        </h4>
      </div>
      <div className="row">
        <div
          className="col"
          style={{
            marginLeft: "25px",
            borderLeft: "2px solid gray",
            marginBottom: "20px",
          }}
        >
          <p className="alert alert-info">
            {" "}
            CUSTMER CARE{" "}
            <PhoneForwardedIcon
              style={{ marginLeft: "20px", marginRight: "10px" }}
            />
            1234567890
          </p>

          <div style={{ display: "flex", borderBottom: "2px solid gray" }}>
            To reach our customer service team please email us at:
            <p className="text-danger">customerservice@gims.com</p>
          </div>

          <p className="alert alert-danger mt-2"> OFFICE ADDRESS :</p>
          <div style={{ display: "flex" }}>
            <BusinessIcon style={{ marginLeft: "20px", marginRight: "10px" }} />
            :
            <p className="text-danger">
              Supermarket Grocery Supplies Pvt. Ltd. 2nd Floor,
              <br />
              Fairway Business Park, Embassy Golf Link, Challaghatta,
              <br />
              Bangalore, Karnataka 560071 Tel: 1234-123-1000
            </p>
          </div>
          <div
            className="alert alert-secondary"
            style={{ textAlign: "center" }}
          >
            <FacebookIcon className="soc" style={{ color: "#4267B2" }} />
            <TwitterIcon className="soc" style={{ color: "#00acee" }} />
            <InstagramIcon className="soc" style={{ color: "#8a3ab9 " }} />
            <AlternateEmailIcon className="soc" style={{ color: "#D44638" }} />
          </div>
          <div style={{ textAlign: "right" }}>
            <Link to="/adminlog">Admin</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
