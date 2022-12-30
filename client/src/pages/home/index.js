import React from 'react';
import Header from '../../components/Header';
import Intro from './intro';
import About from './about';
import Experiences from './experiences';
import Projects from './projects';
import Navbar from '../../components/navbar';


function Home() {
    return (
        <div >
            <Navbar />
            <div className='bg-primary px-40 sm:px-5'>
                <Intro />
                
                
            </div>
            
        </div>
    )
}

export default Home