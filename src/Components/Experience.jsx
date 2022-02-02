import React, { useState } from 'react'
import NeuralNet from './NeuralNet'

const Experience = () => {
    return (
        <div>
            <p className="text-center font-semibold text-2xl my-4">Experience</p>
            <div className='flex'>

                <div className='w-1 rounded-full bg-indigo-500 flex-grow' />

                <div className='w-full flex flex-col gap-4'>

                    <div>
                        <div className="-ml-3 flex gap-2 items-center">
                            <div className="w-5 h-5 rounded-full bg-indigo-500" />
                            <p className='font-semibold text-lg'>Machine Learning</p>
                        </div>
                        <div className='m-4'>
                            
                        </div>
                        
                    </div>
                    <div className='flex'>

                        <div className="-ml-3 flex gap-2 items-center">
                            <div className="w-5 h-5 rounded-full bg-indigo-500" />
                            <p className='font-semibold text-lg'>Music</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience