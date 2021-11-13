import React from 'react';
import './Guide.css';
import guideImg1 from '../../../images/guide/guide1.png'
import guideImg2 from '../../../images/guide/guide2.png'
import guideImg3 from '../../../images/guide/guide3.png'
import guideImg4 from '../../../images/guide/guide4.png'
import guideImg5 from '../../../images/guide/guide5.png'
import guideImg6 from '../../../images/guide/guide6.png'


const Guide = () => {

    return (
        <div className="container text-center">
            <h1 className="text-center my-4 guide-header">Tour <span className="text-warning">Guide</span></h1>
            <h6 className="mb-4 text-center guide-experience">All Guide Are 5 Year Expart In Travel</h6>
            <div className="row g-4">
                <div className="col-md-4">
                    <img className="guide-img" src={guideImg1} alt="" />
                    <div className="d-flex justify-content-evenly">
                        <i className="fab-icon fab fa-facebook-f"></i>
                        <i className="fab-icon fab fa-instagram"></i>
                        <i className="fab-icon fab fa-twitter"></i>
                        <i className="fab-icon fab fa-whatsapp"></i>
                    </div>
                    <div>
                        <h3 className="guide-name">Sakura Chen</h3>
                        <h5 className="designation">Tour Guide</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="guide-img" src={guideImg2} alt="" />
                    <div className="d-flex justify-content-evenly">
                        <i className="fab-icon fab fa-facebook-f"></i>
                        <i className="fab-icon fab fa-instagram"></i>
                        <i className="fab-icon fab fa-twitter"></i>
                        <i className="fab-icon fab fa-whatsapp"></i>
                    </div>
                    <div>
                        <h3 className="guide-name">Williamson</h3>
                        <p className="designation">Tour Guide</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="guide-img" src={guideImg3} alt="" />
                    <div className="d-flex justify-content-evenly">
                        <i className="fab-icon fab fa-facebook-f"></i>
                        <i className="fab-icon fab fa-instagram"></i>
                        <i className="fab-icon fab fa-twitter"></i>
                        <i className="fab-icon fab fa-whatsapp"></i>
                    </div>
                    <div>
                        <h3 className="guide-name">Seth Rollans</h3>
                        <p className="designation">Tour Guide</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="guide-img" src={guideImg4} alt="" />
                    <div className="d-flex justify-content-evenly">
                        <i className="fab-icon fab fa-facebook-f"></i>
                        <i className="fab-icon fab fa-instagram"></i>
                        <i className="fab-icon fab fa-twitter"></i>
                        <i className="fab-icon fab fa-whatsapp"></i>
                    </div>
                    <div>
                        <h3 className="guide-name">Emma</h3>
                        <p className="designation">Tour Guide</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="guide-img" src={guideImg5} alt="" />
                    <div className="d-flex justify-content-evenly">
                        <i className="fab-icon fab fa-facebook-f"></i>
                        <i className="fab-icon fab fa-instagram"></i>
                        <i className="fab-icon fab fa-twitter"></i>
                        <i className="fab-icon fab fa-whatsapp"></i>
                    </div>
                    <div>
                        <h3 className="guide-name">Benjamin</h3>
                        <p className="designation">Tour Guide</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="guide-img" src={guideImg6} alt="" />
                    <div className="d-flex justify-content-evenly">
                        <i className="fab-icon fab fa-facebook-f"></i>
                        <i className="fab-icon fab fa-instagram"></i>
                        <i className="fab-icon fab fa-twitter"></i>
                        <i className="fab-icon fab fa-whatsapp"></i>
                    </div>
                    <div>
                        <h3 className="guide-name">Sophia</h3>
                        <p className="designation">Tour Guide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;