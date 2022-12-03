import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = ({ cards }) => {

    //object destructuring 
    const { _id, title, price, image, description } = cards;

    return (
        <div className="card w-96 bg-base-100 shadow-md">

            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img src={image} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <div className='flex flex-col justify-center items-center' >
                    <h2 className="card-title mb-5">{title}</h2>
                    <p className='mb-5' >{description?.slice(0, 70)}...</p>
                </div>
                <div className="card-actions justify-between">
                    <p className='text-xl text-gray-500'> <span className='font-bold'>Price: </span>${price}</p>
                    <Link to={`/serviceDetails/${_id}`}><button className='bg-red-600 hover:bg-red-500 text-white px-8 py-2 rounded-md'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;