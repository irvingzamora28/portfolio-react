import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'
import Typical from 'react-typical'
import { Link as ScrollLink} from 'react-scroll'

const Header = () => {

    const [animated, setAnimated] = useState(false);
    useEffect(() => {
        setAnimated(true)
    }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-bottle font-bebas-neue">
            <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="w-full md:w-2/5">
                    <LazyLoadImage src={content.header.img} effect="blur" placeholderSrc={process.env.PUBLIC_URL + '/assets/default.png'} />
                </div>
                <div className="text-indigo-50 text-center md:text-left">
                    <h2 className={`${animated ? "" : "translate-y-10 opacity-0  "} transform transition duration-1000 text-4xl md:text-5xl font-bold`}>
                        {content.header.text[0]}
                        <br />
                        {content.header.text[1]}
                    </h2>
                    <h1 className={`${animated ? "" : "translate-y-10 opacity-0  "} transform transition duration-1000 font-bold text-2xl text-blue-bottle-light-500`}>{content.header.text[2]}
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            className="inline-block"
                        />
                    </h1>
                    <ScrollLink to="body" smooth={true}>
                    <button className="animate-float bg-blue-bottle-light-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg shadow-lg">{content.header.btnText}</button>
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

export default Header
