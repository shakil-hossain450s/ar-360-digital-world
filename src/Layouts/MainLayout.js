import React from 'react';
import { Outlet } from 'react-router-dom';
import WebsiteFooter from '../Pages/Shared/WebsiteFooter/WebsiteFooter';
import Navigation from '../Pages/Shared/Navigation/Navigation';

const MainLayout = () => {
    return (
        <div className='flex flex-col h-screen max-w-7xl mx-auto'>
            <header className='z-20 w-full'>
                <Navigation></Navigation>
            </header>
            <main className='flex-1 p-5'>
                <Outlet></Outlet>
            </main>
            <footer>
                <WebsiteFooter></WebsiteFooter>
            </footer>
        </div>
    );
};

export default MainLayout;