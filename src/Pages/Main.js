import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../Hook/useTitle';
import Footer from './Footer/Footer';
import Header from './Header';

const Main = () => {

    //dynamic title 
    useTitle('Home')

    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;