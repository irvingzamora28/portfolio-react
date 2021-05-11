import React from 'react'
import profile from '../assets/wave-background.jpg'

const About = () => {
    return (
        <>
            <section className="px-5 pb-10 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto">
                <div className="flex items-center justify-center lg:items-start md">
                    <div className="mr-1">
                        <h4 className="font-bold">Irving Zamora</h4>
                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                    </div>
                    <img src={profile} className="w-10 h-10 rounded-full" alt="" />
                </div>
                <div className="sm:mt-5 md:mt-0">
                    <q className="text-4xl text-center block">Whatever a man can image, he can invent.</q>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:mt-5 md:mt-0 text-center lg:text-left">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in minima ex magnam non laborum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus reiciendis minima mollitia tenetur, sint sequi excepturi natus nostrum praesentium?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nemo incidunt sit at ipsum iusto eum nam aspernatur sequi ipsa ad in sunt nihil, dolorum recusandae vel vitae repellat quas voluptatum deleniti cupiditate. Ipsam sunt dolorem optio cumque ducimus magni unde saepe beatae obcaecati enim. Cupiditate hic repellat error corporis.</p>
                </div>
            </section>
        </>
    )
}

export default About
