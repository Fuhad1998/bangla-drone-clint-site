import React from "react";

const Footer = () => {
  return (
    <div className="row  bg-dark pt-5">
      <div className="col-sm-12 col-md-4 col-xs-12">
        <h1 className="text-white p-3">Customer Service</h1>
        <h4 className="text-white">Shipping Policy</h4>
          <h4 className="text-white">Delivery First</h4>
          <h4 className="text-white">Compensation First</h4>
      </div>
      <div className="col-sm-12 col-md-4 col-xs-12">
        <h1 className="text-white p-3">About Us</h1>
        <h4 className="text-white">Our ami is to provide best service</h4>

        <h6 className="text-white">
          {" "}
          <i className="fas fa-envelope "></i> fuwadrare444@gmail.com
        </h6 >
        <h6 className="text-white">
          {" "}
          <i className="fas fa-map-marker-alt"> </i>
          184 Main Uttara Street
        </h6>
        <h6 className="text-white">
          {" "}
          <i className="fas fa-phone"></i> 01715497198
        </h6>
      </div>
      <div className="col-sm-12 col-md-4 col-xs-12">
        <h1 className="text-white p-3">Contact Us</h1>
        <h2 className="text-white">
          <i className="fab fa-facebook text-primary"> </i> Facebook
        </h2>
        <h2 className="text-white">
          <i className="fab fa-twitter text-info"> </i> Twitter
        </h2>
        <h2 className="text-white">
          <i className="fab fa-youtube text-danger"> </i> Youtube
        </h2>
      </div>
      <div>
        <p className="text-center text-white  p-2">
          <i className="  fas fa-copyright mb-2 "></i> Copy right 2022 By Fuwad
          Hossian
        </p>
      </div>
    </div>
  );
};

export default Footer;
