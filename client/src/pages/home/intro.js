import React from 'react'


function Intro() {
    return (
        <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
            <h1 className='text-white text-4xl'>Hi, I am</h1>
            <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Ben Hobson</h1>
            <h1 className='text-6xl sm:text-3xl text-white font-semibold'>I Build Applications On The Web.</h1>
            <p className='text-white text-2xl w-2/3'>I have recently completed the UCLA Extension Full Stack Developer Bootcamp, and I am Looking to get my start in the tech industry.  </p>
            <button className='border-2 border-tertiary text-white text-2xl px-10 py-3 rounded'>Get Started</button>

        </div>
    )
}

export default Intro