import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deleted, setDeleted] = useState(null);
    const { user } = useAuth();

    const email = user.email;

    useEffect(() => {
        fetch(`https://lit-reef-17054.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);


    const handleDelete = (id) => {
        const proceedToDelete = window.confirm("Are you sure , you want to delete?")
        if (proceedToDelete) {
            fetch(`https://lit-reef-17054.herokuapp.com/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setDeleted(true)
                    }
                    else {
                        setDeleted(false)
                    }
                })
        }
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
                <Table striped bordered hover>
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
                                    {/* <Link to={`/placeOrder/${order._id}`}>
                                        <button className=" btn bg-warning">Buy Now</button>
                                    </Link> */}
                                    <button
                                        onClick={() => handleDelete(order._id)}
                                        className="btn bg-danger text-white order-delete-btn ms-1"

                                    >
                                        Delete
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
            );
        </div>
    );
};

export default MyOrders;
