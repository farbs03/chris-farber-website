import { CodeIcon, BookOpenIcon, ChartBarIcon } from '@heroicons/react/outline'

export const codingExperience = [
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

export const orgs = [
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

export const education = [
    {
        title: "Purdue University",
        years: "2022-2026",
        info: [
            {
                title: "Major",
                text: "B.S., Computer Science",
            },
            {
                title: "AP Classes Taken",
                text: 8
            }
        ]
    },
    {
        title: "Hamilton Southeastern High School",
        years: "2018-2022",
        info: [
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
    }
]