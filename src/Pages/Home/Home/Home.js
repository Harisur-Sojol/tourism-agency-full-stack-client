import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Guide></Guide>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;