import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {


    return (
        <div className='mt-40 mb-20'>
            <div>
                <h1 className='font-extralight text-5xl mb-10' >FOLLOW ME ON <span className='text-red-600' >SOCIAL SITE</span></h1>

                <div className='flex justify-center items-center text-5xl gap-5' >
                    <FaFacebook className='hover:text-red-600'></FaFacebook>
                    <FaInstagram className='hover:text-red-600' ></FaInstagram>
                    <FaTwitter className='hover:text-red-600'></FaTwitter>
                </div>

            </div>
        </div>
    );
};

export default Footer;