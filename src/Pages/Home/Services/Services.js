import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://pacific-lake-44074.herokuapp.com/tourpackage')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="container mt-5">
            <h5 className="service-header text-center">Choose Your Package</h5>
            <h2 className="service-header2 text-center mb-5">Select Your Best Package <br /> For Your Travel</h2>
            <div className="row g-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;