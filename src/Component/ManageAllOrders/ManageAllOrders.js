import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";



const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-hollows-61224.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);


  const handelDeleteOrders = id =>{
    const proceed = window.confirm('Are You Sure You Want TO Delete')
    if(proceed){
        const url = `https://murmuring-hollows-61224.herokuapp.com/${id}`
        fetch(url, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            alert('deleted successful')
            const remainingUser = allOrders?.filter(order => order._id!==id)
            setAllOrders(remainingUser)
          }
        })
    }

  
    
  }
  return (
    <div className='container '>
    <div className='row '>
        <h1 className='p-2'>All Orders</h1>
            {
                allOrders.map(allOrder=> <Card
                key={allOrder._id}
                allOrder={allOrder}
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
                    <button onClick={() => handelDeleteOrders(allOrder?._id)} className="btn btn-warning">Cancel Order</button>
                  </Card.Body>
                </Card>)
            }
    </div>
</div>
  );
};

export default ManageAllOrders;
