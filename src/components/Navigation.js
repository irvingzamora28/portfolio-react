import React from 'react'
import content from '../content'

const Navigation = () => {
    return (
        <div className="bg-blue-bottle-light-500">
            <div className="flex items-centered justify-between w-10/12 mx-auto py-3 text-indigo-100 font-bebas-neue">

            <h1 className="text-2xl font-bold">{content.nav.logo}</h1>
            <div className="my-auto">
                {content.nav.links.map((link, index) => {
                    return <span key={index} className="text-xl mr-4 ">{link.text}</span>
                })}
                </div>
            </div>
        </div>
    )
}

export default Navigation
