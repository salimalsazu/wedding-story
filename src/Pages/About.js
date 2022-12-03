import React from 'react';
import useTitle from '../Hook/useTitle';
import aboutPhoto from '../Assets/about/about.png'


const About = () => {

    //dynamic title 
    useTitle('About')

    return (
        <div className='flex flex-col  my-20 '>
            <div className='flex flex-col w-4/5 text-end ' >
                <h1 className='text-4xl text-gray-600 font-bold mb-5 text-end' >HELLO LEGENDS!</h1>
                <h1 className='text-4xl text-gray-600 font-bold mb-5 text-end' >I am Salim Al Sazu</h1>
            </div>

            <div className='flex  flex-col lg:flex-row justify-between mt-10'>
                <div>
                    <img src={aboutPhoto} alt="" />
                </div>
                <div className='flex flex-col justify-center mt-5 lg:mt-0 items-center lg:pr-24'>

                    <p className='text-md text-gray-600 font-light  text-end w-2/3' > Thank you for stopping by.</p>
                    <p className='text-md text-gray-600 font-light mt-5 text-end w-2/3' > I am a dhaka based wedding photographer, documenting weddings across the Bangladesh and beyond.</p>
                    <p className='text-md text-gray-600 font-light mt-5 text-end w-2/3' > With nearly ten years experience, I have been lucky enough to capture over 550+ weddings. From city celebrations, to mountain top elopements. The calm, the chaotic and all that goes in-between.</p>
                    <p className='text-md text-gray-600 font-light mt-5 text-end w-2/3' > For me, there is no ideal wedding or couple, love is love and it is beautiful in all of it’s forms. </p>
                    <div className=' flex justify-end w-2/3'>
                        <button className='border text-lime-500 border-lime-500 hover:border-gray-200 hover:bg-gray-200 hover:text-black px-10 py-2 mt-5 ' >FIND OUT MORE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;