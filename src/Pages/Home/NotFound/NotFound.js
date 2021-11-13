import React from 'react';
import './NotFound.css';
import errorImg from '../../../images/404.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container text-center">
            <h1 className="error-header1 mt-4">Oops!</h1>
            <img src={errorImg} alt="" />
            <h2 className="error-header2">That Page Is Not Found.</h2>
            <Link to="/home"><button className="error-btn">GO TO HOME</button></Link>
        </div>
    );
};

export default NotFound;