import React from "react";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";

const Faq = () => {
  return (
    <div className="container contact-container" style={{ marginTop: "20px" }}>
      <div className="ctitle">
        <h4>
          <LiveHelpIcon />
          FAQ's
        </h4>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div
          className="col-md-6"
          style={{
            marginLeft: "25px",
            borderLeft: "2px solid gray",
            marginBottom: "20px",
          }}
        >
          <div>
            <h4>FAQs</h4>
            <div>
              <p>
                Kindly check the FAQ below if you are not very familiar with the
                functioning of this website.
              </p>
              <p>
                If your query is of urgent nature and is different from the set
                of questions then please contact us at:{" "}
              </p>
              <p>Email: customerservice@gims.com</p>
              <p>Call us: 0123 456 7890 </p>
              <p>
                Chat with us in-app under customer service /Need Help section
                from 6 am & 10 pm on all days including Sunday to get our
                immediate help If you are not satisfied with the resolution
                provided by us, then please write to our Grievance Officer at
                grievanceofficer@gims.com.
              </p>
              <h4 className="text-success">Registration</h4>
              <p style={{ color: "gray" }}>How do I register ?</p>
              <p>
                You can register by clicking on the "Sign Up" link at the top
                right corner of the homepage. Please provide the information in
                the form that appears. You can review the terms and
                conditionssubmit the registration information.
              </p>
              <h4 className="text-success">Order Delivery Related</h4>
              <p style={{ color: "gray" }}>When will I receive my order ?</p>
              <p>
                Once you are done selecting your products and click on checkout
                you will be prompted to select delivery slot. Your order will be
                delivered to you on the day and slot selected by you. If we are
                unable to deliver the order during the specified time duration
                (this sometimes happens due to unforeseen situations).
              </p>
              <h4 className="text-success">Others</h4>
              <p style={{ color: "gray" }}>Do you have offline stores ?</p>
              <p>
                No we are a purely internet based company and do not have any
                brick and mortar stores.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Faq;
