import React from 'react';
import './AboutUs.css';
import img1 from '../../../images/traveller/traveller1.png'
import img2 from '../../../images/traveller/traveller2.png'
import img3 from '../../../images/traveller/traveller3.png'
import aboutUsImg from '../../../images/aboutUsImg.png'

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row align-items-center g-0 my-5">
                <div className="col-md-6">
                    <img className="aboutUs-img" src={aboutUsImg} alt="" />
                </div>
                <div className="col-md-6">
                    <h5 className="about-header1 my-4">About TourX</h5>
                    <h2 className="about-header2 mb-4">The Best Travel Agency Company.</h2>
                    <p>Travelling is fun and exciting.Of course we don't want to have any trouble for schedules,hotel bookings,purchasing ticket,etc.We are the ones who will take care of all your needs. </p>
                </div>
            </div>
            <h5 className="traveller-header1 text-center mt-3">Our Traveller Say</h5>
            <h2 className="traveller-header2 text-center">What Our Traveller Say About Us</h2>
            <div className="row">
                <div className="col-md-4 my-5">
                    <div className="card traveller-card h-100">
                        <img src={img1} className="card-img mx-auto mt-3" alt="..." />
                        <div className="card-body">
                            <h3 className="text-center my-3">Dina Jems</h3>
                            <h5 className="text-center text-secondary">Traveller</h5>
                            <p className="card-text">A wonderful experience. Excellent. The trip was full of activity, interest, good local food and wine, with a friendly and welcoming approach from our guides and boat crew.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-5">
                    <div className="card traveller-card h-100">
                        <img src={img2} className="card-img mx-auto mt-3" alt="..." />
                        <div className="card-body">
                            <h3 className="text-center my-3">Jahid Hasan</h3>
                            <h5 className="text-center text-secondary">Traveller</h5>
                            <p className="card-text">Such a great experience! Air ticket, hotel/resort booking, event management and many more services. I recommend The Tour X.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-5">
                    <div className="card traveller-card h-100">
                        <img src={img3} className="card-img mx-auto mt-3" alt="..." />
                        <div className="card-body">
                            <h3 className="text-center my-3">Shwan pull</h3>
                            <h5 className="text-center text-secondary">Traveller</h5>
                            <p className="card-text">This was a well organised and exciting trip delving into the history of the area. The gulet was very spacious and comfortable and the food nutritious, delicious and well cooked.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;