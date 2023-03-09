import React from 'react';
import designIcon from '../../../assets/serviceIcon/logoDesign.png';
import webIcon from '../../../assets/serviceIcon/web-development.png';
import appIcon from '../../../assets/serviceIcon/appDevelopment.png';
import seoIcon from '../../../assets/serviceIcon/seo.png';
import clickIcon from '../../../assets/serviceIcon/click.png';
import marketingIcon from '../../../assets/serviceIcon/marketing.png';

const ServiceArea = () => {
    const services = [
        {
            id: 1,
            icon: designIcon,
            serviceHeader: "Logo & Branding",
            serviceText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi quisquam? Dolor ea praesentium debitis."
        },
        {
            id: 2,
            icon: webIcon,
            serviceHeader: "Website Development",
            serviceText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi quisquam? Dolor ea praesentium debitis."
        },
        {
            id: 3,
            icon: appIcon,
            serviceHeader: "Mobile App Development",
            serviceText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi quisquam? Dolor ea praesentium debitis."
        },
        {
            id: 4,
            icon: seoIcon,
            serviceHeader: "Search Engin Optimization",
            serviceText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi quisquam? Dolor ea praesentium debitis."
        },
        {
            id: 5,
            icon: clickIcon,
            serviceHeader: "Pay Per Click",
            serviceText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi quisquam? Dolor ea praesentium debitis."
        },
        {
            id: 6,
            icon: marketingIcon,
            serviceHeader: "Online Marketing",
            serviceText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi quisquam? Dolor ea praesentium debitis."
        }
    ]

    return (
        <section className='lg:mt-[-50px] mt-[-30px] bg-white shadow-2xl lg:max-w-6xl mx-auto lg:px-12 px-6 lg:py-16 py-8 text-center rounded-lg w-11/12 mb-16'>
            <h3
                className='lg:text-3xl text-2xl text-[#32325C] font-medium my-2'>
                Service We Provide
            </h3>
            <p className='text-sm text-[#32325C] mb-3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, repudiandae?
            </p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 justify-items-center content-center mt-12 mb-5'>
                {
                    services.map(service => <div key={service.id}>
                        <div className='flex items-center justify-center'>
                            <img className='lg:w-[120px] lg:h-[100px] overflow-hidden' src={service.icon} alt="service icon" />
                        </div>
                        <div className='mt-5'>
                            <h3 className='my-2 text-xl font-medium text-[#32325C]'>{service.serviceHeader}</h3>
                            <p className='text-sm text-[#32325C]'>{service.serviceText}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ServiceArea;