import React from 'react';

const Testimonial = () => {
    return (
        <section className="my-8">
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                <h1 className="text-3xl lg:text-5xl font-extralight leading-none text-center uppercase mb-14">Customers are saying <span className='text-red-600'  >about me</span></h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                <div className="flex flex-col items-center mx-12 lg:mx-0">
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">The best thing about him is his professionalism. His work is so good that even when I thought I missed out on many important shots due to time shortage, He could silently capture all of it. His effort is next level! And I’m more than happy with the pictures and videos I got. Especially I would like to say about the editing skills and cinematography, which I haven’t seen on any other photography page.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                    <p>Leroy Jenkins</p>
                </div>
                <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">Every single photo was one I was proud of. Thank you for the most amazing job Salim Al Sazu did on our engagement shoot. Two years have passed and I still love looking at them all. Our photo book is priceless! Great service and lovely behavior of him, such as my second family. The best photographer and I ‌recommend Salim Al Sazu to everyone!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg"></span>
                    <p>Tafseer Al Yaad</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;