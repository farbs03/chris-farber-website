import React, { useState } from 'react'

const Footer = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='bg-gray-900 text-white p-4 relative'>
            <div className='max-w-7xl w-full mx-auto'>
                <p className='font-semibold font-mono text-center text-indigo-500'>{"made with <3 by chris farber :-)"}</p>
                <div className='flex flex-wrap gap-4 justify-center my-4'>
                    {['Home', 'Blog', 'Email', 'Github', 'LinkedIn', 'Instagram'].map((item) => (
                        <a href="/" className='text-sm font-semibold hover:text-indigo-500 transition duration-200 ease-in'>{item}</a>
                    ))}
                </div>
                <p className='font-semibold text-sm text-gray-500 text-center'>© <a className='hover:text-indigo-500 transition duration-200 ease-in' href="https://chrisfarbs.com/">chrisfarbs.com</a> 2022</p>
            </div>
            <div className='right-0 bottom-0 absolute font-semibold text-xs'>
                <button onClick={() => setOpen(!open)} className='hover:text-indigo-500 transition duration-200 ease-in font-semibold'>secret :O</button>
                {open &&
                    <p className='text-gray-500'>secret feature coming soon :)</p>
                }
            </div>
        </div>
    )
}

export default Footer