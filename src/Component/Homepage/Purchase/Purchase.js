import React from "react";
import { useForm } from "react-hook-form";
import "./Purchase.css"

const Purchase = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
       alert('order successfull')
      };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 my-5">
            <h1>This is products detail</h1>
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
