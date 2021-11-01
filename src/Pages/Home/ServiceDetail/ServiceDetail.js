
import './ServiceDetail.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ServiceDetail = () => {

    const {id} = useParams()
    const [data, setData] = useState([]);
 

    useEffect(() => {
        fetch('https://pacific-lake-44074.herokuapp.com/tourpackage')
        .then(res => res.json())
        .then(data => {
            const exactData = data?.find(td => td.id == id);
            setData(exactData)
        })
    } ,[id])

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-4 text-center">
                    <img src={data.img} alt="" />
                </div>
                <div className="col-md-8">
                    <h1 className="details-name">{data.name}</h1>
                    <p className="text-secondary fst-italic fw-normal">{data.description}</p>
                    <h4 className="text-warning">Price: $ {data.price}</h4>
                    <button className="details-btn mt-4"><i class="fas fa-shopping-cart"></i>  Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;