import React from 'react';
import Subscription from '../../Subscription/Subscription';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;