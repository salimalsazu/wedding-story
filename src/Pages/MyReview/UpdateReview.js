import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/ProviderContext';
import useTitle from '../../Hook/useTitle';

const UpdateReview = () => {

    //dynamic title 
    useTitle('Update Review')

    //Loading data 
    const updateReview = useLoaderData();

    //user fetch
    const { user } = useContext(AuthContext);

    const [update, setUpdate] = useState(updateReview);

    const { name } = update;
    const handleUpdate = (e) => {
        e.preventDefault();

        fetch(`https://wedding-server-chi.vercel.app/reviews/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    toast.success('Update Done')
                    e.target.reset();
                } else {
                    toast.error('Something Wrong !! Please try again...')
                }
            })

    }


    const handleInputBlur = (e) => {
        const form = e.target;
        const value = form.value;
        const field = form.name;
        const newUpdate = { ...update };
        newUpdate[field] = value;
        setUpdate(newUpdate);
        // console.log(newUpdate);
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center' >
                <div className=' md:p-14 rounded-lg lg:w-1/2 w-full'>
                    <div className='text-start'>
                        <div className='ml-5'>
                            <div className='ml-55'>
                                <h1 className="text-md font-bold">Update Your Review</h1>
                            </div>
                            <form onSubmit={handleUpdate}>

                                <div className='flex flex-col md:flex-row justify-between items-center my-5'>

                                    <input onBlur={handleInputBlur} type="text" name="name" defaultValue={name} placeholder="Your Name" className="input input-bordered rounded-lg w-3/4" readOnly />
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center my-5'>

                                    <input onBlur={handleInputBlur} type="text" defaultValue={user?.email} name="email" placeholder="Your Email" className="input input-bordered rounded-lg w-3/4" readOnly />
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center my-5'>

                                    <input onBlur={handleInputBlur} type="text" defaultValue={user?.photoURL} name="photoURL" placeholder="Your photoURL" className="input input-bordered rounded-lg w-3/4" readOnly />
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                                    <input onBlur={handleInputBlur} type="text" name="rating" placeholder="Ratings" className="input input-bordered rounded-lg w-3/4" required />
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                                    <input onBlur={handleInputBlur} type="text" name="comment" placeholder="Your Comment ex: good/best/average" className="input input-bordered rounded-lg w-3/4" required />
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center my-5'>

                                    <textarea onBlur={handleInputBlur} name="details" id="" placeholder="Update your details " cols="30" rows="40" className="input input-bordered rounded-lg w-3/4" required ></textarea>
                                </div>

                                <div className='lg:ml-0 ml-16'>
                                    <button type='submit' className='bg-orange-600 text-xl text-white px-10 py-3 rounded-lg hover:bg-gray-700 hover:text-white duration-500 ease-in-out'>Review</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default UpdateReview;