import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div >
            <SectionTitle title="Experience" />

            <div className="flex py-10 gap-20 sm:flex-col">
                <div className="flex flex-col gap-10 border-l-2 border-[#ea78267b] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {experiences.map((experience, index) => (
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
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                <h1 className="text-secondary text-2xl">{experiences[selectedItemIndex].title}</h1>
                <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].company}</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at blanditiis eos. Iste dolorem, nam qui quia illo fugiat distinctio veniam dolorum rerum sunt nobis sequi atque, voluptas corrupti ab.</p>
            
                </div>
            </div>

        </div>
    )
}

export default Experiences 