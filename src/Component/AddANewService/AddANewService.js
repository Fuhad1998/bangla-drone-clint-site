import React from "react";
import { useForm } from "react-hook-form";

const AddANewService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("successful Add A Product");
          }
        });
  };

  return (
    <div>
      <form className="login-from" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="p-2 ">Add Services</h1>
        <input
          className="input-btn p-2 rounded"
          {...register("name")}
          placeholder="product name"
          type="name"
        />
        <br />
        <input
          className="input-btn p-2 rounded"
          {...register("detail")}
          placeholder="product detail"
          type="text"
        />
        <br />
        <input
          className="input-btn p-2 rounded"
          {...register("img")}
          placeholder="Img Url"
          type="text"
        />
        <br />
        <input
          className="input-btn p-2 rounded"
          {...register("price")}
          placeholder="Price"
          type="number"
        />
        <br />
        <input
          className="input-btn p-2 rounded"
          {...register("model")}
          placeholder="model"
          type="text"
        />
        <br />
        <input
          className="btn-submit input-btn btn-primary fs-5 rounded"
          type="submit"
          value="Add A Service"
        />
      </form>
    </div>
  );
};

export default AddANewService;
