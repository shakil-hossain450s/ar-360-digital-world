import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className='shadow-xl pr-5'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <NavLink to='/'>
                    <Navbar className='flex'>
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Digital World logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Digital World
                        </span>
                    </Navbar>
                </NavLink>
                <Navbar.Collapse>
                    <Navbar.Link
                        to="/"
                        active={true}
                    >
                        <span className='font-medium'>Home</span>
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        <span className='font-medium'>About</span>
                        
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        <span className='font-medium'>Services</span>
                        
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        <span className='font-medium'>Pricing</span>
                        
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        <span className='font-medium'>Contact</span>
                        
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;