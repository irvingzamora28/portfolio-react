import React, { useState } from 'react'
import content from '../content'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link as ScrollLink } from 'react-scroll'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const NavigationHome = () => {

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        console.log("Clicked");
        setOpen(!open)
    }

    return (
        <nav className="bg-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={toggleOpen} className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            {open ? (
                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-2xl font-bold text-gray-100">{content.nav.logo}</h1>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                            <ScrollLink to="projects" smooth={true}  onClick={toggleOpen}>
                                    <button className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</button>
                                </ScrollLink>
                                <ScrollLink to="contact" smooth={true}  onClick={toggleOpen}>
                                    <button className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</button>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={classNames( open ? 'flex' : 'hidden', 'sm:hidden' )} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 w-full">
                    <ScrollLink to="projects" smooth={true}  onClick={toggleOpen}>
                        <button className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</button>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true}  onClick={toggleOpen}>
                        <button className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</button>
                    </ScrollLink>
                </div>
            </div>
        </nav>
    )
}

export default NavigationHome
