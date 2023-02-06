import { HomeIcon, CogIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Settings from "../Settings"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex items-center justify-between'>
            <NavLink to='/' className='w-8 h-8 rounded-md inline-flex justify-center flex-shrink-0 items-center bg-gray-100 dark:bg-gray-800 hover:text-primary hover:ring-2 hover:ring-primary hover:bg-white dark:hover:bg-gray-900 transition duration-200 ease-in'>
                <HomeIcon className='w-6 h-6' />
            </NavLink>

            {/* <Settings /> */}
        </div>
    )
}

export default Navbar