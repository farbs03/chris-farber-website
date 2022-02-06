import React, { useState } from 'react'
import './footer.css'

const Footer = () => {

    const links = [
        {Name: "Home", Link: "/"},
        {Name: "Blog", Link: "/blog"},
        {Name: "Email", Icon: 'far fa-envelope fa-lg', Link: "mailto:cgeraldfarber@icloud.com"},
        {Name: "LinkedIn", Icon: 'fab fa-linkedin fa-lg', Link: "https://www.linkedin.com/in/chris-farber-ba90181a4/"},
        {Name: "GitHub", Icon: "fab fa-github fa-lg", Link: "https://github.com/farbs03"},
        {Name: "Instagram", Icon: 'fab fa-instagram fa-lg', Link: "https://www.instagram.com/cfarbs03/"},
    ]

    const [open, setOpen] = useState(false)

    return (
        <div className='footer text-white p-4 relative'>
            <div className='max-w-7xl w-full mx-auto'>
                <p className='font-semibold font-mono text-center text-indigo-500'>{"made with ❤️ by chris farber 🐌"}</p>
                <div className='flex flex-wrap gap-4 justify-center my-2'>
                    {links.map((link) => (
                        <a key={link.Link} href={link.Link} target="_blank" className='text-sm font-semibold hover:text-indigo-500 transition duration-200 ease-in'>{link.Name}</a>
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