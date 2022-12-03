import { GithubAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/ProviderContext';
import './LogIn.css'
import useTitle from '../../Hook/useTitle';

const Login = () => {

    // function for loader
    const [loader, setLoader] = useState(false);

    //dynamic title
    useTitle('Login')

    //navigate for private route & others
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const gitHubprovider = new GithubAuthProvider();

    const { signIn, providerGitHub, providerLogin } = useContext(AuthContext);


    //google login
    const handleGoogleSignIn = () => {

        providerLogin()
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
                console.error(error)
                toast.error('Something Wrong ! log in denied')
            })
    }


    //github log in 
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


    //user login 
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user)

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoader(true);

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
                        setLoader(false);
                        navigate(from, { replace: true });
                        toast.success('Login Successful')
                    })


            })
            .catch((error) => {
                console.error(error)
                toast.error('Something wrong, please try agin')
            })

    }


    return (
        <div>
            <div className='flex justify-center items-center'>
                {
                    loader && <div className="w-16 h-16 border-4 border-gray-900 border-dashed rounded-full animate-spin "></div>
                }
            </div>
            <div className='flex flex-col lg:flex-row justify-center  items-center bg-login' >
                <div className='flex flex-col text-white px-10 lg:px-0'>
                    <div className='mb-5'>
                        <h1 className='text-3xl mb-3' >Sign In</h1>
                        <p className='font-extralight text-md'>Sign in to Wedding Story</p>
                    </div>
                    <div className='mt-5'>
                        <form onSubmit={handleLogIn} >
                            <div className='mb-5 '>
                                <input type="email" name='email' placeholder="Type here Email" className="input input-bordered input-secondary text-gray-700 w-full " />
                            </div>
                            <div>
                                <input type="password" name='password' placeholder="Type here password" className="input input-bordered input-secondary text-gray-700 w-full " />
                            </div>
                            <div className='mt-3'>
                                <p>Can't access your account? <span className='text-yellow-600' >Reset your password now.</span></p>
                            </div>
                            <div className='mt-3'>
                                <button type='submit' className='bg-red-400 hover:bg-red-600 text-whte px-8 py-2 rounded-md' >Sign In</button>
                            </div>
                        </form>

                        <div className=' mt-5'>
                            <div onClick={handleGoogleSignIn} className=' border border-1 p-2 flex items-center mt-3  gap-3 cursor-pointer'>
                                <button className='flex justify-center items-center gap-3' >
                                    <span> <FaGoogle></FaGoogle> </span>
                                    <span>Google</span>
                                </button>
                            </div>
                            <div className='border border-1 p-2 flex  items-center mt-3  gap-3 cursor-pointer'>
                                <button onClick={handleSignInGit} className='flex justify-center items-center gap-3'>
                                    <span> <FaGithub></FaGithub> </span>
                                    <span>GitHub</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h1>Don't have an account please <Link to='/reg'> <span className='text-yellow-600 ' >Register</span> </Link> </h1>
                    </div>
                </div>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Login;