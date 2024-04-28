import React from 'react';
import img1 from '../assets/4.png'
import img2 from '../assets/5.png'
import img3 from '../assets/6.png'

const CauroselHome = () => {
    return (
        <div className='py-20'>
            <h1 className='text-4xl text-center text-slate-700 font-semibold title mb-5'>How It work!</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                <figure><img src={img1} alt="" />
                    <h1 className='text-center text-xl mt-4'>Selected Background</h1>
                </figure>
                <figure><img src={img2} alt="" />
                <h1 className='text-center text-xl mt-4'>Uploads Your Photos</h1></figure>
                <figure><img src={img3} alt="" />
                <h1 className='text-center text-xl mt-4'> Receive Your Digital Portrait And Get It Printed</h1>
                </figure>
            </div>
        </div>
    );
};

export default CauroselHome;