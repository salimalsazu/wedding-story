import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';
import userImage from '../../Assets/user/user.png'

const SingleReview = ({ list, handleDelete }) => {

    //dynamic title 
    useTitle('Single Review')

    //Object destructuring 
    const { _id, comment, details, photoURL, rating, serviceName, name } = list;


    return (


        <section class=" rounded-t-10xl overflow-hidden mt-14 mx-8">
            <div class="container px-4 mx-auto">
                <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden bg-red-300">
                    <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                        <div class="flex flex-col lg:flex-row lg:flex-wrap items-center">
                            <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} class="mr-6" src={photoURL ? photoURL : userImage} alt="" />
                            <h4 class="w-full md:w-auto text-xl font-heading font-medium">{name}</h4>
                            <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                            <span class="mr-4 text-xl font-heading font-medium"> <span className='text-gray-600' >Rating</span> <span className='text-red-600' >{rating}</span></span>

                            <span class="mr-4 text-xl font-heading font-medium"> <span className='text-gray-600' >Comment:</span> <span className='text-red-600' >{comment}</span></span>

                        </div>
                    </div>
                    <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                        <div class="flex flex-wrap">
                            <div class="w-full md:w-2/3 mb-6 md:mb-0">
                                <p class="mb-4 text-4xl max-w-2xl text-darkBlueGray-400 leading-loose">{serviceName}</p>
                                <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">{details}</p>
                                <div class="-mb-2 flex flex-row">
                                    <Link to={`/myreview/${_id}`} >

                                        <button class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                                            <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                                                <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                                                    <MdEdit></MdEdit>
                                                </div>
                                                <span class="text-green-500 font-heading font-medium">Edit</span>
                                            </div>
                                        </button>
                                    </Link>

                                    <div class="inline-flex w-full md:w-auto mb-2">
                                        <button onClick={() => handleDelete(list)} class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                                            <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                                                <Link className='text-md'><button><MdDelete></MdDelete></button></Link>
                                            </div>
                                            <span class="text-green-500 font-heading font-medium">Delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </section>


    );
};

export default SingleReview;