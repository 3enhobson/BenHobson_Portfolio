import React from "react";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects"; 

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div className="bg-primary">
            <Navbar />
            <SectionTitle title="Projects" />

            <div className="flex py-10 gap-20 sm:flex-col">
                <div className="flex flex-col gap-10 border-l-2 border-[#ea78267b] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {projects.map((project, index) => (
                        <div onClick={() => { setSelectedItemIndex(index); }}
                            className='cursor-pointer'
                        >
                            <h1
                                className={`text-xl px-5 
                                ${selectedItemIndex === index
                                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#ea78262c] py-3'
                                    : 'text-white'
                                    }`}
                            >
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                <h1 className="text-secondary text-2xl">{projects[selectedItemIndex].title}</h1>
                <h1 className="text-tertiary text-xl">{projects[selectedItemIndex].description}</h1>
                <img className='h-[50vh] ' src={projects[selectedItemIndex].image} />
            
                </div>
            </div>
        </div>
    )
}

export default Projects