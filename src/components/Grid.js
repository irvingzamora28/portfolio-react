import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {FiPlayCircle} from 'react-icons/fi'
import grid1 from '../assets/grid-1.jpg'
import grid2 from '../assets/grid-2.jpg'

const Grid = () => {
    return (
        <>
            <section className="sm:grid sm:grid-cols-2 sm:gap-5 lg:max-w-7xl lg:mx-auto pb-10">
                <div className="relative">
                    <img src={grid1} alt="" />
                    <h4 className="absolute bottom-20 text-green-superlight text-2xl px-5">A starter guide to self improvement</h4>
                    <button className="absolute right-0 bottom-0 bg-green-superlight py-2 px-6 flex items-center">Click Me <FaArrowRight className="ml-2" /></button>
                </div>
                <div className="relative mt-5 sm:mt-0">
                    <img src={grid2} alt="" />
                    <h4 className="absolute top-2 right-2 bg-green-superlight py-2 px-6">The sound goes on</h4>
                    <FiPlayCircle className="absolute text-green-superlight left-5 text-6xl bottom-10 sm:text-5xl sm:bottom-16 md:bottom-20 lg:text-9xl lg:pb-10" />
                </div>
            </section>
        </>
    )
}

export default Grid
