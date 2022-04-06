import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
  const { name, detail, img, price, model, id } = service;
  return (
    <Col xs={12} sm={6} md={4} className="g-4 ">
      <Card className="h-100 p-3 shadow px-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Title>
            Price BD:$ <span className="text-success">{price}</span>
          </Card.Title>
          <Card.Title>
            Model: <span className="text-success">{model}</span>
          </Card.Title>
          <Card.Title>
            Detail:<span>{detail}</span>
            <br />
          </Card.Title>
          <button type="button" className="btn-primary service-btn">
            <Link className="btn-primary service-btn link-btn" to={`/purchase/${id}`}>Buy Now</Link>
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
