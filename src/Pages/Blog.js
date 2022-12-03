import React from 'react';
import useTitle from '../Hook/useTitle';

const Blog = () => {

    //dynamic blog 
    useTitle('Blog')

    return (
        <div>
            <div >
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">November 08, 2022</span>
                        <a rel="noopener noreferrer" href="/" className="px-2 py-1 bg-red-600 text-white font-bold rounded ">SQL and NoSQL</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="/" className="text-2xl font-bold hover:underline">Difference between SQL and NoSQL</a>
                        <p className="mt-2">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">

                        <div>
                            <a rel="noopener noreferrer" href="/" className="flex items-center">
                                <span className="hover:underline "><span className='text-gray-600 font-bold' >Author:</span> Salim Al Sazu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">November 08, 2022</span>
                        <a rel="noopener noreferrer" href="/" className="px-2 py-1 bg-red-600 text-white font-bold rounded ">JWT</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="/" className="text-2xl font-bold hover:underline">What is JWT, and how does it work?</a>
                        <p className="mt-2">What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                        <p className="mt-2"> Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">

                        <div>
                            <a rel="noopener noreferrer" href="/" className="flex items-center">
                                <span className="hover:underline "><span className='text-gray-600 font-bold' >Author:</span> Salim Al Sazu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">November 09, 2022</span>
                        <a rel="noopener noreferrer" href="/" className="px-2 py-1 bg-red-600 text-white font-bold rounded ">javascript and NodeJS</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="/" className="text-2xl font-bold hover:underline">What is the difference between javascript and NodeJS?</a>
                        <p className="mt-2">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>

                    </div>
                    <div className="flex items-center justify-between mt-4">

                        <div>
                            <a rel="noopener noreferrer" href="/" className="flex items-center">
                                <span className="hover:underline "><span className='text-gray-600 font-bold' >Author:</span> Salim Al Sazu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">November 09, 2022</span>
                        <a rel="noopener noreferrer" href="/" className="px-2 py-1 bg-red-600 text-white font-bold rounded ">NodeJS </a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="/" className="text-2xl font-bold hover:underline">How does NodeJS handle multiple requests at the same time?</a>
                        <p className="mt-2">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

                    </div>
                    <div className="flex items-center justify-between mt-4">

                        <div>
                            <a rel="noopener noreferrer" href="/" className="flex items-center">
                                <span className="hover:underline "><span className='text-gray-600 font-bold' >Author:</span> Salim Al Sazu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;