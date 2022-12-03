import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ProviderContext';
import toast, { Toaster } from 'react-hot-toast';
import './Reg.css'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hook/useTitle';

const Reg = () => {

    const [loader, setLoader] = useState(false);

    //dynamic title 
    useTitle('Registration')

    //error functionality 
    const [error, setError] = useState(null);

    //navigate for private route
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { createUser, updateUserProfile, providerGitHub, providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();

    const gitHubprovider = new GithubAuthProvider();


    //google registration 
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                const currentUser = {
                    email: user.email
                }

                fetch('https://wedding-server-chi.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('wedding-token', data.token);
                        navigate(from, { replace: true });
                        toast.success('Registraation Successful')
                    })

            })
            .catch((error) => {
                console.error(error)
                toast.error('Something Wrong ! log in denied')
            })
    }

    //git hub registration 
    const handleSignInGit = () => {
        providerGitHub(gitHubprovider)
            .then((result) => {
                const user = result.user;
                console.log(user)

                const currentUser = {
                    email: user.email
                }

                fetch('https://wedding-server-chi.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('wedding-token', data.token);
                        navigate(from, { replace: true });
                        toast.success('Login Successful')
                    })


            })
            .catch((error) => {
                console.error('error', error)
                toast.error('Something Wrong ! log in denied')
            })
    }



    //user registration 
    const handleReg = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const user = { name, email, password, photoURL };
        console.log(user)


        if (password.length < 6) {
            setError('password should be at least 6 charecters')
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoader(true);
                handleUpdateUserProfile(name, photoURL);

                const currentUser = {
                    email: user.email
                }

                fetch('https://wedding-server-chi.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        form.reset();
                        setLoader(false);
                        localStorage.setItem('wedding-token', data.token);
                        navigate(from, { replace: true });
                        toast.success('Login Successful')
                    })



            })
            .catch((error) => {
                console.error(error)
                toast.error('Registration incomplete')
            })

    }

    //update image & name 
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => console.error(error))

    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                {
                    loader && <div className="w-16 h-16 border-4 border-gray-900 border-dashed rounded-full animate-spin "></div>
                }
            </div>
            <div className='flex flex-col lg:flex-row justify-center  items-center bg-reg' >
                <div className='flex flex-col text-white px-10 lg:px-0'>
                    <div className='mb-5'>
                        <h1 className='text-3xl mb-3' >Register Now</h1>
                        <p className='font-extralight text-md'>Registration with Wedding Story</p>
                    </div>
                    <div className='mt-5'>
                        <form onSubmit={handleReg} >
                            <div className='mb-5 '>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-secondary text-gray-700 w-full " />
                            </div>
                            <div className='mb-5 '>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered input-secondary text-gray-700 w-full " />
                            </div>
                            <div className='mb-5'>
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered input-secondary text-gray-700 w-full " />
                            </div>
                            <div>
                                <input type="text" name='photoURL' placeholder="Your Photo URL" className="input input-bordered input-secondary text-gray-700 w-full " />
                            </div>
                            <div className='mt-3'>
                                <p>Can't access your account? <span className='text-yellow-600' >Reset your password now.</span></p>
                            </div>
                            <div className='text-red-600'>
                                {error}
                            </div>
                            <div className='mt-3'>
                                <button type='submit' className='bg-red-400 hover:bg-red-600 text-whte px-8 py-2 rounded-md' >Sign up</button>
                            </div>
                        </form>

                        <div className=' mt-5'>
                            <div className=' border border-1 p-2 flex items-center mt-3  gap-3 cursor-pointer'>
                                <button onClick={handleGoogleSignIn} className='flex justify-center items-center gap-3' >
                                    <span> <FaGoogle></FaGoogle> </span>
                                    <span>Google</span>
                                </button>
                            </div>
                            <div className='border border-1 p-2 flex  items-center mt-3  gap-3 cursor-pointer'>
                                <button onClick={handleSignInGit} className='flex justify-center items-center gap-3 '>
                                    <span> <FaGithub></FaGithub> </span>
                                    <span>GitHub</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h1>Already Have an Account, please <Link to='/login'> <span className='text-yellow-600 ' >Login</span> </Link> </h1>
                    </div>
                </div>

            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Reg;