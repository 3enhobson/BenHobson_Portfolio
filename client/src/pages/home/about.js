import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Pic from '../../css/Ben_picture.png'

function About() {
    const skills = [
        "JavaScript",
        "Node",
        "Express",
        "React",
        "MySql",
        "MongoDB"
    ]
    return (
        <div>
            <SectionTitle title="About" />

            <div className='flex w-full items-center'>
                <img className='h-[50vh] ' src={Pic} />
                <div className='flex flex-col gap-5'>
                    <p className='text-white px-10'>
                        Hello! My name is Ben Hobson. I am a Music Producer, DJ, and most recently I've began working towards becoming a Web Developer. My decision to pursue Web Development stemmed from my enjoyment in learning about new technologies, and developing new skill sets. Over the past few years I have taken an interest in Blockchain, and the technologies built upon it. In studying Blockchain, I realized it would be beneficial for me to have a solid understanding in Web development before I began learning about Blockchain Development.
                    </p>
                    <p className='text-white px-10'>In 2022 I decided to take my curiosity and turn it into motivation so I enrolled in the UCLA Extension Full Stack development course and began my journey of learning web development.</p>
                    <p></p>
                </div>
            </div>

            <div className='py-5'>
                <h1 className='text-white font-semi text-xl'>Here are a few technologies I have been working with recently:</h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                {skills.map((skill,index) => (
                    <div className='border border-tertiary py-3 px-5'>
                        <h1 className='text-white'>{skill}</h1>
                    </div>
                ))}
                </div>

            </div>


        </div>
    )
}

export default About