import React from 'react'
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr'

const Footer = () => {
    return (
        <>
            <footer className="px-5 py-20 lg:max-w-7xl lg:mx-auto">
                <div className="mb-10 md:flex md:items-center md:justify-between">
                    <h2 className="text-4xl mb-2">IrvingZamora</h2>
                    <p>Follow us on social media</p>
                </div>

                <div className="flex flex-col-reverse md:flex-row md:justify-between">
                    <p>&copy; Copyright IrvingZamora All rights Reserved</p>

                    <ul className="flex mb-2 items-center justify-center">
                        <li className="mx-5 text-1xl"><GrFacebook /> </li>
                        <li className="mx-5 text-1xl"><GrTwitter /></li>
                        <li className="mx-5 text-1xl"><GrInstagram /></li>
                    </ul>
                </div>
            </footer>   
        </>
    )
}

export default Footer