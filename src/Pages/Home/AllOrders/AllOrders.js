import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deleted, setDeleted] = useState(null);
    const { user } = useAuth();
    const history = useHistory()

    const email = user.email;

    useEffect(() => {
        fetch(`https://lit-reef-17054.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);



    const handleDelete = id => {
        console.log(id)
        const proceedToDelete = window.confirm("Are you sure , you want to delete?")
        if (proceedToDelete) {
            fetch(`https://lit-reef-17054.herokuapp.com/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" }
            })
                .then(res => res.json())
                .then(orders => {
                    if (orders.deletedCount > 0) {
                        setDeleted(true)
                    }
                    else {
                        setDeleted(false)
                    }
                })
        }
    }

    const handleUpdating = id =>{
        console.log(id)
        fetch(`https://lit-reef-17054.herokuapp.com/updateOrder/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('Are you sure you want to update your order?')
            }
        })
    }


    const totalReducer = (preValue, currentValue) =>
        preValue + parseInt(currentValue.price);
    const total = orders.reduce(totalReducer, 0);


    return (

        <div>
            <h2 className="text-center mt-5 service-heading">
                My <span className="text-warning">Orders:</span> {orders?.length}
            </h2>
            <div className="underline-div mx-auto mb-3"></div>
            <div className="container">
                <Table striped bordered hover className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Days</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <img className="myOrder-img pe-1" src={order.img} alt="" />
                                    {order?.name}
                                </td>
                                <td>{order.days}</td>
                                <td>{order.status}</td>
                                <td>${order.price}</td>
                                <td>
                                    <button onClick={() => handleUpdating(order._id)} className="btn bg-warning text-white">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(order._id)}
                                        className="btn order-delete-btn bg-danger text-white ms-1"

                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="fw-bold">Total</td>
                            <td className="fw-bold">${total}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllOrders;
