import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='bg-red-100 text-black flex flex-col justify-center items-center w-full py-4'>
            <div className="logo font-bold text-2xl">
                <p className="text-2xl font-bold text-gradient">AI Resume Analyzer</p>
            </div>
            <div className='flex justify-center items-center'>
                Analyze Your Resume with mayankprof@gmail.com
            </div>
            <p className="text-sm mt-2">© {currentYear} All rights reserved.</p>
        </div>
    )
}


export default Footer;
