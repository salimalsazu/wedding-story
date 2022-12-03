import React from 'react';
import Lottie from 'lottie-react';
import reader from './error.json'
import { useNavigate } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';

const Error = () => {

    //dynamic title
    useTitle('Error')

    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center mt-10 lg:mt-0'>
            <div className='flex flex-col justify-center lg:justify-end items-end mr-3 lg:mr-0'>
                <button className='text-xl mt-5 mb-2 bg-red-600 text-white rounded-md px-4 py-2' onClick={() => navigate(-1)} > Back</button>
                <p className='text-4xl font-extralight text-red-600' >404 ! Page Not Found</p>
            </div>
            <Lottie className='w-1/2' animationData={reader} loop={true} />
        </div >
    );
};

export default Error;