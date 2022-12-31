import React from 'react'


function Intro() {
    return (
        <div className='h-[100vh] bg-primary px-40 sm:px-10 flex flex-col items-center justify-center gap-8 py-10'>
            <h1 className='text-white text-3xl sm:text-xl'>Hi, I am</h1>
            <h1 className='text-7xl sm:text-4xl text-secondary font-semibold'>Ben Hobson</h1>
            <h1 className='text-5xl sm:text-2xl text-white font-semibold'>I Build Applications On The Web.</h1>
            
            <a href="/about"><button className='border-2 border-tertiary text-white text-2xl sm:text-xl px-10 py-3 rounded'>Get Started</button></a>

        </div>
    )
}

export default Intro