import React from "react";

function SectionTitle({
    title,
}) {
    return (
        <div className="flex gap-10 items-center pt-20 pl-10">
            <h1 className="text-3xl text-white">{title}</h1>
            <div className="w-60 h-[1px] bg-tertiary">

            </div>
        </div>
    )
}

export default SectionTitle