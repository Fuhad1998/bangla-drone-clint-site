import React, { useEffect, useState } from "react";

import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div className='container '>
    <div className='row '>
        <h1 className='p-2'>All Orders</h1>
            {
                allOrders.map(allOrder=><ManageAllOrder
                key={allOrder._id}
                allOrder={allOrder}
                ></ManageAllOrder>)
            }
    </div>
</div>
  );
};

export default ManageAllOrders;
