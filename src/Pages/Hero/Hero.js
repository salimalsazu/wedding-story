import React from 'react';
import useTitle from '../../Hook/useTitle';
import './Hero.css'

const Hero = () => {
    //dynamic title 
    useTitle('Home')

    return (
        <div className='bg'>
            <div className='flex flex-col justify-center items-center h-screen' >
                <h1 className='text-5xl font-extralight text-white' >BALANCING THE BEAUTIFULLY COMPOSED <br /> <br /> WITH <span className='text-red-600 font-extrabold' >THE COOL</span > AND <span className='text-red-600 font-extrabold' >CANDID</span></h1>
            </div>
        </div>
    );
};

export default Hero;