import Image from 'next/image';
import React from 'react';
import Schedule from '../../assets/Schedule.png'

const Banner = () => {
    return (
        <div >
            <Image src={Schedule} alt='' height="auto" className='mx-auto' ></Image>
        </div>
    );
};

export default Banner;