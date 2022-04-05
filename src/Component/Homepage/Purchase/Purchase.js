import React from "react";
import { useForm } from "react-hook-form";

const Purchase = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
       alert('order successfull')
      };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6">
            <h1>This is products detail</h1>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">
            <h1>Please Write Your Details</h1>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <input
              className=""
              {...register("name")}
              placeholder="Write your name"
            />
            <input
              className=""
              {...register("email")}
              placeholder="Write your email"
            />
            <input
              className=""
              {...register("address")}
              placeholder="Write your address"
            />
            <input
              className=""
              {...register("number")}
              placeholder="Write your phone number"
            />

            <input
              className="btn-submit"
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
