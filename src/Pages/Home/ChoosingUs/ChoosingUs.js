import React from 'react';
import choosingImage from '../../../assets/choosingUs/image1.png';
import choosingImage2 from '../../../assets/choosingUs/2.png';
import { Button } from 'flowbite-react';

const ChoosingUs = () => {
    return (
        <section className='lg:p-8 p-2 lg:mt-20 mt-8 lg:mx-4 mx-2'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-24 gap-5'>
                <div className=''>
                    <img className='w-full' src={choosingImage} alt="service image" />
                </div>
                <div className='mt-12'>
                    <h1 className='lg:text-[40px] md:text-3xl text-[23px] font-medium md:text-start text-center mb-4 text-[#32325C]'>Reasons for choosing us</h1>
                    <p className='text-[#32325C]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error quisquam voluptatem dolorum! Dolorem corporis laborum inventore rem impedit neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi quis placeat culpa tenetur, repudiandae omnis nisi at neque quas deleniti unde eligendi ipsam quaerat odio asperiores fugiat quisquam maiores.
                    </p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-24 gap-5 mt-32'>
                <div className='mt-12'>
                    <h1 className='lg:text-[32px] text-[23px] font-medium md:text-start text-center mb-2 text-[#32325C]'>About Our AR 360 Digital World</h1>
                    <p className='text-[#32325C]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error quisquam voluptatem dolorum! Dolorem corporis laborum inventore rem impedit neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi quis placeat culpa tenetur, repudiandae omnis nisi at neque quas deleniti unde eligendi ipsam quaerat odio asperiores fugiat quisquam maiores.
                    </p>
                    <Button className='ease-in-out duration-300 lg:mx-0 my-3 mx-auto'>
                        Contact Now
                    </Button>
                </div>
                <div className=''>
                    <img className='w-full' src={choosingImage2} alt="service image" />
                </div>
            </div>
        </section>
    );
};

export default ChoosingUs;