import React from "react";
import { Card } from "react-bootstrap";

const ManageAllOrder = ({ allOrder }) => {
  return (
    <Card
      className="col-xs-12 col-sm-12 col-md-4 px-2 shadow-sm  m-3 "
      border="primary"
      style={{ width: "20rem" }}
    >
      <Card.Body>
        {/* <Card.Title>Primary Card Title</Card.Title> */}
        <Card.Text>Name: {allOrder.name}</Card.Text>
        <Card.Text>Email: {allOrder.email}</Card.Text>
        <Card.Text>Address: {allOrder.address}</Card.Text>
        <Card.Text>OrderName: {allOrder.orderName}</Card.Text>
        <Card.Text>Phone Number: {allOrder.number}</Card.Text>
        <button className="btn btn-warning">Cancel Order</button>
      </Card.Body>
    </Card>
  );
};

export default ManageAllOrder;
