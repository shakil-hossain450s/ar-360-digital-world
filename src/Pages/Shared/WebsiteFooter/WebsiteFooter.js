import { Footer } from 'flowbite-react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const WebsiteFooter = () => {
    const socialMenu = [
        {
            id: 1,
            icon: <FaFacebook></FaFacebook>,
            classes: "text-2xl text-gray-700 hover:-translate-y-1 hover:scale-125 ease-in-out duration-300",
            location: "https://www.facebook.com/"
        },
        {
            id: 2,
            icon: <FaInstagram></FaInstagram>,
            classes: "text-2xl text-gray-700 hover:-translate-y-1 hover:scale-125 ease-in-out duration-300",
            location: "https://www.instagram.com/"
        },
        {
            id: 3,
            icon: <FaTwitter></FaTwitter>,
            classes: "text-2xl text-gray-700 hover:-translate-y-1 hover:scale-125 ease-in-out duration-300",
            location: "https://www.twitter.com/"
        },
        {
            id: 4,
            icon: <FaLinkedinIn></FaLinkedinIn>,
            classes: "text-2xl text-gray-700 hover:-translate-y-1 hover:scale-125 ease-in-out duration-300",
            location: "https://www.github.com/"
        }
    ];

    return (
        <div>
            <Footer container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div className='mb-5'>
                            <Link to='/'>
                                <h2 className='flex'>
                                    <img
                                        src="https://flowbite.com/docs/images/logo.svg"
                                        className="mr-3 h-6 sm:h-9"
                                        alt="Digital World logo"
                                    />
                                    <span className="self-center text-xl font-semibold dark:text-white">
                                        Digital World
                                    </span>
                                </h2>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        About Us
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Twitter
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Facebook
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Instagram
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="Digital World™"
                            year={2023}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            {
                                socialMenu.map(social => <Link
                                    key={social.id}
                                    to={social.location}
                                    className={social.classes}
                                >
                                    {social.icon}
                                </Link>)
                            }
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default WebsiteFooter;