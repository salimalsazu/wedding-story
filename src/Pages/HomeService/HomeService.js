import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';
import SingleService from '../SingleService';

const HomeService = () => {

    // dynamic title  
    useTitle('Home')

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://wedding-server-chi.vercel.app/service-home')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-14' >

            <h1 className='lg:text-4xl text-xl uppercase'>Welcome to <br /><span className='text-red-600 text-4xl lg:text-8xl' >Wedding Story</span></h1>
            <p className='text-2xl font-extralight mt-4 '>Best Photography solution near to you</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center mt-10'>
                {
                    service.map(cards => <SingleService cards={cards} key={cards._id} ></SingleService>)
                }

            </div>
            <div className='mt-8'>
                <Link to='/service' ><button className='bg-red-600 hover:bg-red-500 text-white px-8 py-2' >See All</button></Link>
            </div>
        </div>
    );
};

export default HomeService;