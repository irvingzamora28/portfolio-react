import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'
import Typical from 'react-typical'

const Header = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-900 font-bebas-neue">
            <div>

                <div>
                    <LazyLoadImage src={content.header.img} effect="blur" placeholderSrc={process.env.PUBLIC_URL + '/assets/default.png'} />
                </div>
                <div className="text-indigo-50 text-center">
                    <h2 className="text-4xl font-bold">
                        {content.header.text[0]}
                        <br />
                        {content.header.text[1]}
                    </h2>
                    <h1 className="font-bold text-2xl text-indigo-400">{content.header.text[2]}
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            className="inline-block"
                        />
                    </h1>
                    <button className="animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg shadow-lg">{content.header.btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Header
