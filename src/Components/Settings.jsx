import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'

import {applyTheme} from "../Utils/applyTheme"
import lightTheme from "../Themes/lightTheme"
import darkTheme from "../Themes/darkTheme"

export default function Settings({open, setOpen}) {

    let currTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(currTheme)

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem('theme', JSON.stringify(newTheme))
        applyTheme(newTheme)
    }

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={() => setOpen(false)}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    </Transition.Child>

                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="bg-secondary-bg inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h2"
                                className="text-lg font-medium leading-6 text-main-text"
                            >
                                Choose Theme Below
                            </Dialog.Title>

                            <div className="mt-2">
                                <div className="flex items-center gap-2">
                                    <button onClick={() => changeTheme(lightTheme)} className='rounded-md bg-gray-500 text-white font-semibold px-4 py-2'>
                                        Light Theme
                                    </button>
                                    <button onClick={() => changeTheme(darkTheme)} className='rounded-md bg-gray-500 text-white font-semibold px-4 py-2'>
                                        Dark Theme
                                    </button>
                                </div>    
                            </div>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="bg-primary text-white px-4 py-2 rounded-md font-semibold"
                                    onClick={() => setOpen(false)}
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
