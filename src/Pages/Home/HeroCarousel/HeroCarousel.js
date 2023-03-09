import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import Typed from 'react-typed';
import Lottie from 'react-lottie';
import HeroComputer from '../../../assets/animation/hero-computer.json'

const HeroCarousel = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: HeroComputer,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <section className='lg:w-full w-[90%] mx-auto lg:flex lg:gap-5 gap-2 lg:mt-20 mb-8 lg:px-12 '>
            <div className='lg:w-[55%] w-11/12 mx-auto lg:text-start text-center lg:mb-0 mb-8'>
                <h4 className='text-[#32325C]'>Welcome to Our <span className='text-[#04c2db] font-medium'>Ar 360 Digital World</span></h4>
                <h2 className='lg:text-3xl text-2xl text-[#32325C] my-2'>Our Services 
                   <br className='lg:hidden'/> <span className='ml-2 font-medium'>
                        <Typed
                            strings={[
                                'Graphics Design',
                                'Web Development',
                                'Facebook Marketing',
                                'SEO',
                                'Import & Export',
                                'amazon FBA'
                            ]}
                            typeSpeed={60}
                            backSpeed={40}
                            loop
                        />
                    </span>
                </h2>
                <p className='text-[#32325C] mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nihil ullam quas impedit expedita pariatur placeat commodi nemo molestias deserunt minus unde nam iusto nisi.
                </p>
                <Button className='ease-in-out duration-300 lg:m-0 mx-auto'>
                    Contact Now
                </Button>
            </div>
            <div className='lg:w-[45%] lg:block hidden'>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
            <div className='w-full lg:hidden block'>
                <Lottie
                    options={defaultOptions}
                    height={300}
                    width={300}
                />
            </div>
        </section>
    );
};

export default HeroCarousel;