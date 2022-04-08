import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';



const MyOrders = () => {
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
      fetch("https://murmuring-hollows-61224.herokuapp.com/orders")
        .then((res) => res.json())
        .then((data) => setmyOrders(data));
    }, []);

    const handelDeleteOrders = id =>{
      const proceed = window.confirm('Are You Sure You Want TO Delete')
      if(proceed){
          const url = `https://murmuring-hollows-61224.herokuapp.com/orders/${id}`
          fetch(url, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
              alert('deleted successful')
              const remainingUser = myOrders?.filter(order => order._id!==id)
              setmyOrders(remainingUser)
            }
          })
      }

    
      
    }
    

    return (
        <div className='container '>
        <div className='row '>
            <h1 className='p-2'>All Orders</h1>
                {
                    myOrders.map(myOrder=><Card
                    key={myOrder._id}
                    myOrder={myOrder}
                        className="col-xs-12 col-sm-12 col-md-4 px-2 shadow-sm  m-3 "
                        border="primary"
                        style={{ width: "20rem" }}
                      >
                        <Card.Body>
                          {/* <Card.Title>Primary Card Title</Card.Title> */}
                          <Card.Text>Name: {myOrder.name}</Card.Text>
                          <Card.Text>Email: {myOrder.email}</Card.Text>
                          <Card.Text>Address: {myOrder.address}</Card.Text>
                          <Card.Text>OrderName: {myOrder.orderName}</Card.Text>
                          <Card.Text>Phone Number: {myOrder.number}</Card.Text>
                          <button onClick={() => handelDeleteOrders(myOrder?._id)}  className="btn btn-warning">Cancel Order</button>
                        </Card.Body>
                      </Card>)
                }
        </div>
    </div>
   
    );
};

export default MyOrders;