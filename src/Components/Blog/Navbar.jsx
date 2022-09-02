import { HomeIcon, CogIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Settings from "../Settings"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex items-center justify-between'>
            <NavLink to='/' className='w-8 h-8 text-main-text rounded-md inline-flex justify-center flex-shrink-0 items-center bg-secondary-bg hover:text-primary hover:ring-2 hover:ring-primary hover:shadow-lg hover:shadow-primary/20 hover:bg-main-bg transition duration-200 ease-in'>
                <HomeIcon className='w-6 h-6' />
            </NavLink>
            <button onClick={() => setOpen(true)} className='w-8 h-8 text-main-text rounded-md inline-flex justify-center flex-shrink-0 items-center bg-secondary-bg hover:text-primary hover:ring-2 hover:ring-primary hover:shadow-lg hover:shadow-primary/20 hover:bg-main-bg transition duration-200 ease-in'>
                <CogIcon className='w-6 h-6' />
            </button>

            <Settings open={open} setOpen={setOpen} />
        </div>
    )
}

export default Navbar