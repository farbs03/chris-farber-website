import { HomeIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <NavLink to="/" className='w-8 h-8 rounded-md inline-flex justify-center flex-shrink-0 items-center bg-gray-700 hover:text-indigo-500 hover:ring-2 hover:ring-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 hover:bg-gray-800 transition duration-200 ease-in'>
                <HomeIcon className='w-5 h-5' />
            </NavLink>
        </div>
    )
}

export default Navbar