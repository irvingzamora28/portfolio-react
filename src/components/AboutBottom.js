import React from 'react'
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr'

const AboutBottom = () => {
    return (
        <>
            <section className="px-5 md:w-1/2 md:ml-auto lg:pr-40 pb-10">

                <h2 className="text-3xl text-center mb-2 md:text-left">Knoy Yourself Know your power</h2>
                <div className="bg-blue-900 h-1 w-20 mx-auto mb-5 md:mx-0"></div>
                <div className="grid grid-cols-1 gap-5 text-center md:text-left">

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, placeat eum neque, corporis accusantium odit asperiores numquam similique aliquid itaque enim quaerat ratione ut perspiciatis quo odio perferendis rerum totam.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod suscipit expedita laboriosam. Eaque aspernatur culpa quisquam autem itaque nesciunt dolorum odio soluta veniam. Voluptatum nihil ea totam laborum magnam ex itaque exercitationem vitae! Omnis sunt consectetur architecto, explicabo fugit, dolorum ducimus eum quam ipsa debitis cumque totam, soluta saepe voluptate!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, pariatur.</p>
                    <ul className="flex items-center justify-center">
                        <li className="mx-5 text-1xl"><GrFacebook /> </li>
                        <li className="mx-5 text-1xl"><GrTwitter /></li>
                        <li className="mx-5 text-1xl"><GrInstagram /></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default AboutBottom
