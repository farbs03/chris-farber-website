import React from "react"

import {motion} from "framer-motion"
import { DownloadIcon } from "@heroicons/react/solid"
import ResumeHeader from "./ResumeHeader"
import {resumeInfo} from "./resumeInfo.ts"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import DomToImage from "dom-to-image"
import { saveAs } from "file-saver"

const Resume = () => {

    function downloadResume() {
        const node = document.getElementById('resume');
        DomToImage.toBlob(node, {width: 816, height: 1056})
        .then(function (blob) {
            saveAs(blob, 'my-node.png');
        });

    }
    const resumeLink = "./Christopher_Farber_resume.pdf";
    return (
        <div>
           <a href={resumeLink} download>
                <button
                    //onClick={downloadResume}
                    className='bg-indigo-500 mb-4 mt-2 ml-auto block rounded-full px-6 py-3 hover:shadow-xl hover:shadow-indigo-500/20 active:shadow-none transition duration-200 ease-in'
                >
                    <p className='font-semibold text-white flex items-center gap-2'>
                        Download Resume <DownloadIcon className='w-5 h-5' />
                    </p>
                </button>
            </a>
            <div id="resume" className="print:visible lg:flex hidden bg-white w-[8.5in] h-[11in] p-[0.8in] print:scale-100 mx-auto text-black lg:flex-col justify-between z-0 relative">
                <div className='absolute top-0 left-0 w-full bg-indigo-500 h-2 z-10' />
                <ResumeHeader />
                {resumeInfo.map((section) => (
                    <div>
                        <p className='font-bold text-indigo-500 text-[14px] mb-2'>{section.title}</p>
                        <div className={`${section.title === "Technologies" ? "grid grid-cols-2" : "flex flex-col"} gap-2 text-[12px]`}>
                            {section.items.map((item) => (
                                <div>
                                    <div className="flex justify-between items-center">
                                        <p><strong>{item.title}</strong><i>{item.position ? ` - ${item.position}` : ""}</i></p>
                                        {item.startDate && <i className="text-gray-500">{item.startDate} - {item.endDate}</i>}
                                    </div>
                                    <ul className="list-disc ml-4">
                                        {item.bullets.map((bullet) => (
                                            <li>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
 
            {/* <Experience /> */}            
            
        </div>
    )
}

export default Resume
