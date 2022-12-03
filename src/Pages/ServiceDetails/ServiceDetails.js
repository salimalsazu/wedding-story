import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/ProviderContext';
import useTitle from '../../Hook/useTitle';
import ServiceReview from './ServiceReview';
import Swal from 'sweetalert2'




const ServiceDetails = () => {

    const [review, setReview] = useState([]);

    //dynamic title 
    useTitle('Service Details')

    //data loader 
    const details = useLoaderData();

    //object destructuring 
    const { _id, title, price, image, rating, description } = details;
    const { user } = useContext(AuthContext);
    const location = useLocation();


    useEffect(() => {

        const url = `https://wedding-server-chi.vercel.app/reviews?review=${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])


    const current = new Date().toLocaleString();

    const handleReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const details = form.details.value;
        const rating = form.rating.value;
        const photoURL = form.photoURL.value;
        const comment = form.comment.value;

        const xyz = { title, name, email, details, rating, photoURL, comment }
        console.log(xyz);
        form.reset();

        //data push for api 
        const review = {
            title,
            review: _id,
            serviceName: title,
            name,
            details,
            email,
            rating,
            photoURL,
            comment,
            current
        }

        fetch('https://wedding-server-chi.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Thank your for your review',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

            })
            .catch(err => console.err(err))

    }

    return (
        <div>

            <div >
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="flex flex-col justify-start items-start">
                        <p rel="noopener noreferrer" href="/" className="px-2 mb-5 py-1 font-bold rounded ">Rating: <span className='text-red-600'>{rating}</span> </p>
                    </div>
                    <div className="mt-3">
                        <img className='w-screen' src={image} alt="" />
                        <div className=" flex flex-col justify-start items-start mt-4">
                            <p rel="noopener noreferrer" href="/" className="text-2xl font-bold">Price:${price}</p>

                        </div>
                        <p className="mt-5 text-4xl font-extrabold">{title}</p>
                        <p className="mt-5 text-lg">{description}</p>
                    </div>

                </div>
            </div>

            <div>
                {
                    review.length === 0 ?
                        <>
                            <h1 className='text-red-600' >No Reviews Were Added </h1>
                        </>

                        :

                        <>
                            <div className='flex flex-col gap-5'>
                                {
                                    review.map(list => <ServiceReview list={list} key={list._id} ></ServiceReview>)
                                }
                            </div>
                        </>
                }
            </div>

            <div>
                {
                    user?.uid || user?.email ?
                        <>

                            <div>
                                <div className='flex flex-col justify-center items-center' >
                                    <div className=' md:p-14 rounded-lg lg:w-1/2 w-full'>
                                        <div className='text-start'>
                                            <div className='ml-5'>
                                                <div className='ml-55'>
                                                    <h1 className="text-md font-bold">Give Your Valuable Review:</h1>
                                                </div>
                                                <form onSubmit={handleReview}>

                                                    <div className='flex flex-col md:flex-row justify-between items-center my-5'>

                                                        <input type="text" name="title" defaultValue={title} className="input input-bordered rounded-lg w-3/4" readOnly />
                                                    </div>
                                                    <div className='flex flex-col md:flex-row justify-between items-center my-5'>

                                                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered rounded-lg w-3/4" required />
                                                    </div>
                                                    <div className='flex flex-col md:flex-row justify-between items-center my-5'>

                                                        <input type="text" defaultValue={user?.email} name="email" placeholder="Your Email" className="input input-bordered rounded-lg w-3/4" readOnly />
                                                    </div>
                                                    <div className='flex flex-col md:flex-row justify-between items-center my-5'>

                                                        <input type="text" defaultValue={user?.photoURL} name="photoURL" placeholder="Your photoURL" className="input input-bordered rounded-lg w-3/4" readOnly />
                                                    </div>
                                                    <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                                                        <input type="text" name="rating" placeholder="Ratings" className="input input-bordered rounded-lg w-3/4" required />
                                                    </div>
                                                    <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                                                        <input type="text" name="comment" placeholder="Your Comment ex: good/best/average" className="input input-bordered rounded-lg w-3/4" required />
                                                    </div>
                                                    <div className='flex flex-col md:flex-row justify-between items-center my-5'>

                                                        <textarea name="details" id="" placeholder="Write somthing about this package" cols="30" rows="30" className="input input-bordered rounded-lg w-3/4" required></textarea>

                                                    </div>


                                                    <div className='ml-16 md:ml-0'>
                                                        <button type='submit' className='bg-red-600 hover:bg-red-500  text-xl text-white px-10 py-3 rounded-lg  duration-500 ease-in-out'>Review</button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className='flex flex-col justify-center items-center  lg:mx-20'>
                                <div>
                                    <h1 className='text-gray-600 text-xl font-bold mb-10'>Please login to add a review</h1>
                                </div>
                                <div >
                                    <Link to="/login" state={{ from: location }} ><button className='bg-red-600 hover:bg-red-500 px-8 py-2 text-white' >Login</button></Link>
                                </div>
                            </div>

                        </>
                }
            </div>
        </div >
    );
};

export default ServiceDetails;