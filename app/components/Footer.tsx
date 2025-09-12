import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <>

    <div className='bg-red-100 text-white flex flex-col justify-center items-center  w-full'>
        <div className="logo font-bold text-white text-2xl">
            <p className="text-2xl font-bold text-gradient">AI Resume Analyzer</p>
        </div>
        <div className='flex justify-center items-center text-black'>
            Analyze Your Resume with mayankprof@gmail.com
            {/* Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by CodeWithHarry */}
        </div>
    </div>
        </>
    )
}

export default Footer;
