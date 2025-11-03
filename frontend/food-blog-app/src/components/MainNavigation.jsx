import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainNavigation(){
    const location = useLocation();
    const hideFooterOn = ['/addRecipe'];
    const shouldShowFooter = !hideFooterOn.includes(location.pathname);
    return(
        <>
       <Navbar />
       <Outlet/>
{shouldShowFooter && <Footer/>}
        </>
    )
}