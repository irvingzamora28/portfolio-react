import React from 'react'
import profile from '../assets/wave-background.jpg'
import showcaseImage from '../assets/showcase.jpeg'
import ReactTypingEffect from 'react-typing-effect'

const Showcase = () => {
    return (
        <>
            <section className="pb-20 lg:flex lg:max-w-7xl lg:mx-auto lg:py-20" id="home">
                <div className="flex items-center justify-center py-10 lg:items-start lg:justify-start">
                    <div className="mr-1">
                        <h4 className="font-bold">Irving Zamora</h4>
                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                    </div>
                    <img src={profile} className="w-10 h-10 rounded-full" alt="" />
                </div>

                

                <div className="px-5 text-center lg:w-2/3 lg:mx-auto">
                    <h1 className="text-4xl text-gray-900 mb-2 lg:text-6xl lg:text-left">Control your own level of <ReactTypingEffect
                    text={["Inspiration", "Motivation", "Determination"]}
                    typingDelay={1000}
                    eraseSpeed={60}
                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                    displayTextRenderer={(text, i) => {
                        return (
                            <h1>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                        <span
                                            key={key}
                                        >{char}</span>
                                    );
                                })}
                            </h1>
                        );
                    }}
                /></h1>
                    <p className="font-bold mt-2 mb-4 lg:text-left">Author: Irving Zamora</p>
                    <p className="lg:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam a suscipit amet quod quidem voluptatum sed cum beatae aspernatur nulla corporis ea esse, veniam explicabo quo voluptatem quaerat voluptatibus aliquid! Rerum fugiat, culpa quas obcaecati sit magni iure saepe cumque, nam vitae, aliquid facilis laborum corporis deleniti dicta nulla eum?</p>
                </div>

            </section>
            <div className="showcase-image mt-10 pb-20">
                <img src={showcaseImage} className="lg:w-full lg:h-96" alt="" />
            </div>
        </>
    )
}

export default Showcase
