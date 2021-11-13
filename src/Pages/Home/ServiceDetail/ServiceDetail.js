import "./ServiceDetail.css";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const ServiceDetail = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const history = useHistory();



  useEffect(() => {
    fetch(`https://lit-reef-17054.herokuapp.com/destination/${id}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const handleBooking = () => {
    const result = data;
    result.email = user.email;
    result.status = "Pending";
    fetch("https://lit-reef-17054.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added to your cart Successfully");
          history.push("/myOrders");
        }
      });
  };

  const handleBookingForm = e => {
    e.preventDefault()
  }


  return (
    <div className="container">
      <div className="row align-items-center mt-5">
        <div className="col-md-4 text-center">
          <img src={data.img} alt="" />
        </div>
        <div className="col-md-4">
          <h1 className="details-name">{data.name}</h1>
          <p className="text-secondary fst-italic fw-normal">
            {data.description}
          </p>
          <h4 className="text-warning">Price: $ {data.price}</h4>
        </div>
        <div className="col-md-4">
          <div className="mt-4 add-des-sec">
            <div className="add-destination py-4">
              <h2 className="text-center">Please fill up this form</h2>
              <hr />
              <form onSubmit={handleBookingForm} className="w-100" >
                <div className="mb-3 mt-3 w-75">
                  <input type="name" value={user.displayName} placeholder='Your Email:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 w-75">
                  <input type="email" value={user.email} placeholder='Your Email:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 w-75">
                  <input type="name" placeholder='Address:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 w-75">
                  <input type="number" placeholder='phone Number:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button onClick={handleBooking} className="details-btn mt-3">
                  <i className="fas fa-shopping-cart"></i> Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
