import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Commitment from './Commitment';
import Reviews from './Reviews';
import Subscribe from './Subscribe';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Commitment></Commitment>
            <Tools></Tools>
            <Reviews></Reviews>
            <BusinessSummery></BusinessSummery>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;