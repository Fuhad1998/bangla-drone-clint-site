import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
  const { name, detail, img, price, model, id } = service;
  return (
    <Col xs={12} sm={6} md={4} className="g-4 ">
      <Card className="h-100  shadow ">
        <Card.Img variant="top" className="px-5" src={img} />
        <Card.Body className="bg-secondary bg-opacity-10">
          <Card.Title className="">Name: {name}</Card.Title>
          <Card.Title className="">
            Price BD:$ <span className="text-">{price}</span>
          </Card.Title>
          <Card.Title className="">
            Model: <span className="text- ">{model}</span>
          </Card.Title>
          <Card.Title className="">
            Detail:<span>{detail}</span>
            <br />
          </Card.Title>
          <button type="button" className="btn-primary service-btn p-2 px-4">
            <Link className="btn-primary  link-btn" to={`/purchase/${id}`}>Buy Now</Link>
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
