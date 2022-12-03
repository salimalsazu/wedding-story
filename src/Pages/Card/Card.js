import React from 'react';
import wedding from '../../Assets/card/wedding.jpg'
import potrait from '../../Assets/card/potrait.jpg'
import music from '../../Assets/card/music.jpg'
import family from '../../Assets/card/family.jpg'
import useTitle from '../../Hook/useTitle';

const Card = () => {

    //dynamic title 
    useTitle('Home')

    return (
        <div >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center'>
                <div className='relative text-center'>
                    <img src={wedding} alt="" />
                    <p className='absolute top-1/2 left-1/2 text-white text-4xl font-extrabold' >Wedding</p>
                </div>
                <div className='relative text-center' >
                    <img src={potrait} alt="" />
                    <p className='absolute top-1/2 left-1/2 text-white text-4xl font-extrabold' >Potrait</p>
                </div>
                <div className='relative text-center'>
                    <img src={music} alt="" />
                    <p className='absolute top-1/2 left-1/2 text-white text-4xl font-extrabold'>Music</p>
                </div>
                <div className='relative text-center'>
                    <img src={family} alt="" />
                    <p className='absolute top-1/2 left-1/2 text-white text-4xl font-extrabold'>Family</p>
                </div>
            </div>
        </div>
    );
};

export default Card;