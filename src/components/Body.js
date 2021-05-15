import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'

const Body = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center text-blue-bottle-light-500" id="body">
                <h1 className="text-5xl font-bold">Stack I use</h1>
            <div className="flex flex-wrap justify-center mt-10">
                {content.stack.tech.map((tech, index) => {
                    return <span className={`${index %2 === 0 ? " animate-float" : "animate-refloat"} w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-8`}> <LazyLoadImage src={tech.img} alt={tech.alt}/> </span>
                }) }
            <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">{content.stack.desc}</p>
            </div>
        </div>
    )
}

export default Body
