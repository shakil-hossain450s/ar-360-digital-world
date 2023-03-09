import React from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import ServiceArea from '../ServiceWeProvide/ServiceArea';
import ServiceWeProvide from '../ServiceWeProvide/ServiceWeProvide';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>
            <ServiceWeProvide></ServiceWeProvide>
            <ServiceArea></ServiceArea>
        </div>
    );
};

export default Home;