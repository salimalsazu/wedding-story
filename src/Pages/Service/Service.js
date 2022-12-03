import React, { useEffect, useState } from 'react';
import useTitle from '../../Hook/useTitle';

import SingleService from '../SingleService';

const Service = () => {

    //dynamic title 
    useTitle('Service')

    const [service, setService] = useState([])

    const [loader, setLaoder] = useState(true)

    useEffect(() => {
        fetch('https://wedding-server-chi.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLaoder(false);
            })

    }, [])


    return (
        <div className='mt-20 lg:mx-10'>
            <div className='flex flex-col justify-center items-center w-full mb-14'>
                <h1 className='text-gray-600  text-5xl font-bold mb-10'> Our <span className='text-red-600' >Service</span></h1>
                <p className='text-center text-gray-500 font-extralight text-md lg:w-1/2' > I am committed to providing professional photography and cinematography services for any kind of occasion at an affordable cost. We specialize in Photography and Wedding Film and religious functions. </p>
            </div>
            <div className='flex justify-center items-center' >
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 justify-center items-center' >
                    {
                        service.map(cards => <SingleService cards={cards} key={cards._id} ></SingleService>)
                    }
                    {
                        loader && <div className="w-16 h-16 border-4 border-gray-900 border-dashed rounded-full animate-spin "></div>
                    }
                </div>
            </div>



        </div>
    );
};

export default Service;