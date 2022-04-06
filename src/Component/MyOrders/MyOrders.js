import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrder/MyOrder';


const MyOrders = () => {
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/orders")
        .then((res) => res.json())
        .then((data) => setmyOrders(data));
    }, []);
    return (
        <div className='container '>
        <div className='row '>
            <h1 className='p-2'>All Orders</h1>
                {
                    myOrders.map(myOrder=><MyOrder
                    key={myOrder._id}
                    MyOrder={myOrder}
                    ></MyOrder>)
                }
        </div>
    </div>
   
    );
};

export default MyOrders;