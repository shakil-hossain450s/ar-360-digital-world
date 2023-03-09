import React, { useState } from 'react';
import people from '../../../assets/count-image/pepole.png';
import folder from '../../../assets/count-image/folder.png';
import file from '../../../assets/count-image/file.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const ServiceWeProvide = () => {
    const [counterOn, setCounterOn] = useState(false);

    const countInfo = [
        {
            id: 1,
            icon: people,
            countNumber: <CountUp start={0} end={140} duration={2} delay={0} />,
            text: 'Happy Clients'
        },
        {
            id: 2,
            icon: folder,
            countNumber: <CountUp start={0} end={1409} duration={2} delay={0} />,
            text: 'Running Projects'
        },
        {
            id: 3,
            icon: file,
            countNumber: <CountUp start={0} end={781} duration={2} delay={0} />,
            text: 'Project Completed'
        }
    ];
    return (
        <section className='mt-12 lg:px-28 px-6 lg:py-20 py-10 bg-[#6384FF] text-white rounded'>
            <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
            >
                <div className='flex justify-between items-center'>
                    {
                        countInfo.map(info => <div key={info.id} className='flex lg:flex-row flex-col items-center lg:text-start text-center'>
                            <img className='lg:w-24 lg:h-full w-16 h-[70px] mx-auto' src={info.icon} alt="icon" />
                            <div className='ml-2'>
                                <h2 className='lg:text-4xl text-[20px] font-semibold'>{counterOn && info.countNumber}+</h2>
                                <p className='text-sm'>{info.text}</p>
                            </div>
                        </div>)
                    }
                </div>
            </ScrollTrigger>
        </section >
    );
};

export default ServiceWeProvide;