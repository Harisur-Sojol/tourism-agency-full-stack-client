
import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const {name, img, price, description, id} = service;

    return (
        <>
             <div className="my-5 col-md-4 ">
                <div className="card w-100 h-100 text-center rounded serviceCard">
                    <div className="d-flex justify-content-center align-items-center h-75 p-2">
                        <img src={img} className="card-img-top h-75 w-75" alt="" />
                    </div>
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                            <h6><span className="text-warning">${price}</span>/per person</h6>
                            <h6><i class="fas fa-clock"></i> 5 Days/6 night</h6>
                        </div>
                        <h5 className="card-title mt-3"><i className="fas fa-map-marker-alt"></i> {name}</h5>
                        <p className="text-secondary fst-italic fw-normal">{description}</p>
                    </div>
                    <div className="card-footer">
                        <div className="">
                            <Link to={`/serviceDetail/${id}`}><button className="service-btn">Book Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;