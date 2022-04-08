import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./Purchase.css"

const Purchase = () => {
  const [product, setProduct] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();

    const item = product.find((pd) => pd.id == id);

    

    const onSubmit = (data) => {
      data.orderName = item.name;
      fetch("https://murmuring-hollows-61224.herokuapp.com/orders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
              alert("order successful");
              reset()
            }

          });
        
       
      };




      useEffect(() => {
        fetch(`https://murmuring-hollows-61224.herokuapp.com/products`)
          .then((res) => res.json())
          .then((data) => setProduct(data));
          
      }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 my-5">
        <Card className="h-100 p-3  px-5">
        <Card.Img variant="top" src={item?.img} />
        <Card.Body>
          <Card.Title>Name: {item?.name}</Card.Title>
          <Card.Title>Price:$ {item?.price}</Card.Title>
          
          <Card.Text>Description: {item?.detail}</Card.Text>
         
        
        </Card.Body>
      </Card>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 my-5  from-div">
            
          <form className="order-from" onSubmit={handleSubmit(onSubmit)}>
          <h2>Please Write Your Details</h2>
            <input
              className="order-input my-2"
              {...register("name")}
              placeholder="Write your name"
            />
            <input
              className="order-input my-2"
              {...register("email")}
              placeholder="Write your email"
            />
            <input
              className="order-input my-2"
              {...register("address")}
              placeholder="Write your address"
            />
            <input
              className="order-input my-2"
              {...register("address")}
              placeholder="Write your City"
            />
            <input
              className="order-input my-2"
              {...register("number")}
              placeholder="Write your phone number"
            />

            <input
              className="btn-submit my-2 btn-primary"
              type="submit"
              value="Please Orders Products"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
