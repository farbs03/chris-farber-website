import React, { useState } from 'react'
import NeuralNet from './NeuralNet'
import { ChevronRightIcon } from "@heroicons/react/solid"
import { CodeIcon, BookOpenIcon, ChartBarIcon } from '@heroicons/react/outline'
import {containerVariant, cardVariant, textVariant} from "../../Utils/variants"
import {motion} from "framer-motion"
import CountUp from 'react-countup'

const codingExperience = [
    {
        icon: <CodeIcon className='w-6 h-6 text-primary' />,
        title: "Technologies",
        items: [
            ['Python', 'Numpy', 'Pandas', 'Tensorflow', 'Keras'],
            ['React JS', 'Tailwind CSS', 'Framer Motion', 'Node JS', 'Mongo DB']
        ]
    },
    {
        icon: <BookOpenIcon className='w-6 h-6 text-primary' />,
        title: "Courses",
        items: [["Stanford ML on Coursera", "Inspirit AI Online Scholars", "Inspirit AI Deep Dives"]]
    },
    {
        icon: <ChartBarIcon className='w-6 h-6 text-primary' />,
        title: "Awards",
        items: [['Community AI Fair Finalist', 'Congressional A.C Winner', 'Set A Good Example Award']]
    },
]

const orgs = [
    {
        title: "HSE Apps",
        image: "",
        role: "Co-Founder and President",
        description: "HSE Apps is a club that teaches people how to code, with the goal of making apps for the school to use. We do community service projects as well, like the website I made for HSE's AP Showcase Night."
    },
    {
        title: "Indiana Hax",
        image: "",
        role: "Founder and Lead Organizer",
        description: "For 2 years, I worked on building an organization to host hackathon events for high school students. This year, I succeeded in obtaining sponsorships for our first event which was held in January."
    },
    {
        title: "Computer Science Honor Society",
        image: "",
        role: "President",
        description: "As president of the Computer Science Honor Society, I planned our community service project, planned meetings, and fostered a better computer science community at our school."
    },
    {
        title: "Indianapolis Youth Orchestra",
        image: "",
        role: "1st Violin, President of Student Board",
        description: "Formerly a 1st violin in the top orchestra, I was a part of this organization for the last 5 years. Additionally, I was president of our very first student board, where I organized events within the orchestra."
    },
]

const education = [
    {
        title: "Grade",
        text: 12,
    },
    {
        title: "Weighted GPA",
        text: 4.694,
    },
    {
        title: "Class Rank",
        text: "5/823"
    },
    {
        title: "AP Classes Taken",
        text: 8
    }
]

const Experience = () => {

    return (
        <motion.div variants={containerVariant} initial="hidden" animate="show" className='text-main-text max-w-4xl mx-auto'>

            <motion.div className='my-20' variants={containerVariant}>

                <motion.div variants={textVariant} className='flex items-center gap-2 font-mono font-semibold text-xl mb-4'>
                    <p className='text-primary'>01.</p>
                    <p>Coding Experience</p>
                    <div className='hidden md:block flex-grow h-[0.1rem] bg-gray-500' />
                </motion.div>

                <motion.div variants={containerVariant} className='my-8 grid md:grid-cols-3 justify-center gap-10 md:gap-4 lg:gap-10 w-full'>
                    {codingExperience.map((section) => (
                        <motion.div variants={cardVariant} key={section.title}>

                            <div className='w-fit mx-auto'>
                                <div className='w-12 h-12 mx-auto inline-flex flex-shrink-0 items-center justify-center border-2 border-primary rounded-full'>
                                    {section.icon}
                                </div>
                            </div>
                            
                            <p className='text-xl font-semibold my-2 text-center'>{section.title}</p>

                            <div className='flex gap-2 justify-center'>

                                {section.items.map((itemList) => (
                                    <div>
                                        {itemList.map((item) => (
                                            <p key={item} className='flex items-center font-semibold text-md'>
                                                <ChevronRightIcon className='w-5 h-5 text-primary' />
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                    
                                ))}

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div className='my-20' variants={containerVariant}>

                <motion.div variants={textVariant} className='flex items-center gap-2 font-mono font-semibold text-xl mb-4'>
                    <p className='text-primary'>02.</p>
                    <p>Activities and Leadership</p>
                    <div className='hidden md:block flex-grow h-[0.1rem] bg-gray-500' />
                </motion.div>

                <motion.div variants={containerVariant} className='my-8 grid md:grid-cols-2 justify-center gap-10 w-full mx-auto'>
                    {orgs.map((org) => (
                        <motion.div key={org.title} variants={containerVariant}>
                            <motion.p variants={textVariant} className='font-semibold text-lg'>{org.title}</motion.p>
                            <motion.p variants={textVariant} className='font-semibold font-mono text-primary my-1'>{org.role}</motion.p>
                            <motion.p variants={textVariant} className='text-sm'>{org.description}</motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div className='my-20' variants={containerVariant}>

                <motion.div variants={textVariant} className='flex items-center gap-2 font-mono font-semibold text-xl mb-4'>
                    <p className='text-primary'>03.</p>
                    <p>Education</p>
                    <div className='hidden md:block flex-grow h-[0.1rem] bg-gray-500' />
                </motion.div>

                <motion.div variants={containerVariant} className='my-8 grid grid-cols-2 md:grid-cols-4 justify-center gap-10 w-fit mx-auto'>
                    {education.map((item) => (
                        <motion.div key={item.title} variants={containerVariant} className='justify-center'>
                            <motion.div variants={cardVariant}>
                                <motion.p variants={textVariant} className='font-semibold text-sm'>{item.title}</motion.p>
                                <motion.p 
                                    variants={textVariant} 
                                    className='font-bold text-2xl text-primary'
                                >
                                    {item.text}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Experience