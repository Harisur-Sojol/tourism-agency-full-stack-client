import React from 'react';
import './Footer.css';
import footerLogo from '../../../images/footer/footerLogo.png'
import paymentImg from '../../../images/footer/payment.png'

const Footer = () => {
    return (
        <>
            <div className='footer-area'>
                <div className="container">
                    <div className="row mt-5 pt-5">
                        <div className="col-md-3 my-3 text-white">
                            <img className='footer-img my-3' src={footerLogo} alt="" />
                            <h6>About TourX</h6>
                            <p className='mb-2'>TourX is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in the world.</p>
                            <p className='text-primary'>Read More...</p>
                        </div>
                        <div className="col-md-3 my-3">
                            <h3 className="text-white">Support</h3>
                            <hr className="mb-2 p-0 text-white" />
                            <ul className="">
                                <li className='info mb-2'>Contact Us</li>
                                <li className='info mb-2'>About Us</li>
                                <li className='info mb-2'>Destinations</li>
                                <li className='info'>Package</li>
                            </ul>
                        </div>
                        <div className="col-md-3 my-3 text-white">
                            <h3 className="mb-3">Contact Us</h3>
                            <hr className="mb-2 p-0 text-white" />
                            <ul className="d-flex contact-list text-center mb-0">
                                <li className="pe-3">
                                    <i className="fas fa-phone-alt"></i>
                                </li>
                                <li>
                                    <p className='footer-info'>+88 018 785 4589</p>
                                </li>
                            </ul>
                            <ul className='d-flex contact-list text-center mb-0'>
                                <li className="pe-3">
                                    <i className="far fa-envelope"></i>
                                </li>
                                <li className="">
                                    <p className='footer-info'>www.tourX@email.com</p>
                                </li>
                            </ul>
                            <ul className='d-flex contact-list text-center mb-0'>
                                <li className="pe-3">
                                    <i className="fas fa-globe-americas"></i>
                                </li>
                                <li>
                                    <p className='footer-info'>www.abc.com</p>
                                </li>
                            </ul>
                            <ul className='d-flex contact-list text-center mb-0'>
                                <li className="pe-3">
                                    <i className="fas fa-map-marker-alt"></i>
                                </li>
                                <li>
                                    <p className='footer-info'>2752 Willison Street Eagan, United Kingdom</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 my-3 text-white ">
                            <h3>We Accepts:</h3>
                            <hr className="mb-2 p-0 text-white" />
                            <div className="col-md-3">
                                <img className="mt-1" src={paymentImg } alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="m-0 p-0 footer-hr text-white" />
                <p className="text-center text-white mb-3  py-3 ">
                    Copyright 2021 <span className="copyright-name">TourX</span> | Design By <span className="copyright-name">Harisur Rahman Sojol</span>
                </p>
            </div>
        </>
    );
};

export default Footer;