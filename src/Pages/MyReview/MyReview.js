
import React, { useContext, useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Hook/useTitle';
import { AuthContext } from '../../Context/ProviderContext';

const MyReview = () => {

    //dynamic title
    useTitle('My Review')

    //context provider
    const { user, logOut } = useContext(AuthContext);


    //functionality for delte purpose & others 
    const [displayReview, setDisplayReview] = useState([]);

    useEffect(() => {
        fetch(`https://wedding-server-chi.vercel.app/allreview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('wedding-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut;
                }
                return res.json();

            })

            .then(data => {
                setDisplayReview(data)
            })
    }, [user?.email, logOut])



    //delete function 
    const handleDelete = (review) => {
        const agree = window.confirm(`Are You sure you want to delete: ${review.title}`)

        if (agree) {
            fetch(`https://wedding-server-chi.vercel.app/reviews/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`Successfully deleted`)
                        // console.log(data);

                        const restReview = displayReview.filter(d => d._id !== review._id)
                        setDisplayReview(restReview);
                    }
                })
        }

    }

    return (
        <div className='flex flex-col gap-5 ' >
            {
                displayReview.length === 0 ?
                    <>
                        <div className='flex justify-center items-center h-96' >
                            <h1 className='text-3xl text-center' >No Reviews Were Added</h1>
                        </div>
                    </>

                    :

                    <>
                        <div>
                            {
                                displayReview.map(list => <SingleReview list={list} key={list._id} handleDelete={handleDelete} ></SingleReview>)
                            }
                        </div>

                    </>
            }

            <Toaster></Toaster>
        </div>
    );
};

export default MyReview;