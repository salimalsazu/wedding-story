import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Hook/useTitle';

const AddService = () => {

    useTitle('Add Service')

    const [service, setService] = useState({})

    //submit function for add service

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        form.reset();
        // console.log(service);

        fetch('https://wedding-server-chi.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('New service has been created');

                }
                else {
                    toast.success('Something error. do it again');
                }
            });

    }

    const current = new Date().toLocaleString();

    // input details from form 

    const handleInputBlur = (e) => {
        const form = e.target;
        const value = form.value;
        const field = form.name;
        const newService = { ...service, current };
        newService[field] = value;
        setService(newService);
        // console.log(newService);
    }

    return (
        <div >
            <div className='bg-white md:p-14 rounded-lg'>
                <div className='lg:text-start text-center mt-5'>
                    <div className='ml-5'>
                        <div className='ml-55'>
                            <h1 className="text-3xl font-bold">Add New Service</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name="title" placeholder="enter title" className="input input-bordered rounded-lg w-3/4" required />
                            </div>
                            <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name="price" placeholder="enter Price" className="input input-bordered rounded-lg w-3/4" required />
                            </div>
                            <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name="image" placeholder="enter Photo ULR" className="input input-bordered rounded-lg w-3/4" required />
                            </div>


                            <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name="rating" placeholder="enter Rating" className="input input-bordered rounded-lg w-3/4" required />
                            </div>
                            <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input onBlur={handleInputBlur} minLength={100} type="text" name="description" placeholder="enter product long description" className="input input-bordered rounded-lg w-3/4" required />
                            </div>


                            <div className='mt-10 text-center md:text-start'>
                                <button type='submit' className='bg-orange-600 text-xl text-white px-6 py-3 rounded-lg hover:bg-gray-700 hover:text-white duration-500 ease-in-out'>Add Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AddService;