import React from 'react';
import ChoosingUs from '../ChoosingUs/ChoosingUs';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import ServiceArea from '../ServiceWeProvide/ServiceArea';
import ServiceWeProvide from '../ServiceWeProvide/ServiceWeProvide';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>
            <ServiceWeProvide></ServiceWeProvide>
            <ServiceArea></ServiceArea>
            <ChoosingUs></ChoosingUs>
        </div>
    );
};

export default Home;