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
        <section className='w-full flex lg:gap-5 gap-2 mt-20 mb-8 px-12'>
            <div className='w-[55%]'>
                <h4 className='text-[#32325C]'>Welcome to Our <span className='text-[#04c2db] font-medium'>Ar 360 Digital World</span></h4>
                <h2 className='text-4xl text-[#32325C] my-2'>Our Services
                    <span className='ml-2 font-medium'>
                        <Typed
                            strings={[
                                'Graphics Design',
                                'Web Development',
                                'Facebook Marketing',
                                'SEO',
                                'Import & Export',
                                'amazon FBA'
                            ]}
                            typeSpeed={40}
                            backSpeed={20}
                            loop
                        />
                    </span>
                </h2>
                <p className='text-[#32325C] mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nihil ullam quas impedit expedita pariatur placeat commodi nemo molestias deserunt minus unde nam iusto nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, illo nostrum. Soluta beatae atque consequuntur nobis quis unde ullam est?
                </p>
                <Button>
                    Contact Now
                </Button>
            </div>
            <div className='w-[45%]'>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </section>
    );
};

export default HeroCarousel;