import React from 'react';
import { Card } from 'react-bootstrap';

const MyOrder = ({MyOrder}) => {
    return (
        <Card
        className="col-xs-12 col-sm-12 col-md-4 px-2 shadow-sm  m-3 "
        border="primary"
        style={{ width: "20rem" }}
      >
        <Card.Body>
          {/* <Card.Title>Primary Card Title</Card.Title> */}
          <Card.Text>Name: {MyOrder.name}</Card.Text>
          <Card.Text>Email: {MyOrder.email}</Card.Text>
          <Card.Text>Address: {MyOrder.address}</Card.Text>
          <Card.Text>OrderName: {MyOrder.orderName}</Card.Text>
          <Card.Text>Phone Number: {MyOrder.number}</Card.Text>
          <button className="btn btn-warning">Cancel Order</button>
        </Card.Body>
      </Card>
    );
};

export default MyOrder;