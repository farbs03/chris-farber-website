import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { evaluateWord } from './evaluateWord' 
import Keyboard from './Keyboard'

const Wordle = () => {

    const [word, setWord] = useState("slush")
    
    const getWord = () => {

        const randIdx = Math.floor(Math.random()*2315)

        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "words.txt", false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText.split("\n");
                    let word = allText[randIdx]
                    setWord(word.toUpperCase())
                }
            }
        }
        rawFile.send(null);
    }

    

    const [guesses, setGuesses] = useState([
        'Point', 
        'Bears', 
        'Smart', 
        'Sails', 
        'Slash', 
        'Slush'
    ])

    const renderCompletedWord = (guess, answer) => {

        let colors = evaluateWord(guess.toUpperCase(), answer.toUpperCase())

        return (
            <div className='flex gap-2'>
                {[0, 1, 2, 3, 4].map((idx) => (
                    <>
                        {
                            colors[idx] === 'G' ?
                            <div className='bg-green-600 rounded-md w-12 h-12 inline-flex items-center justify-center flex-shrink-0'>
                                <p className='font-semibold text-lg capitalize'>{guess[idx]}</p>
                            </div>
                            :
                            colors[idx] === 'Y' ? 
                            <div className='bg-yellow-600 rounded-md w-12 h-12 inline-flex items-center justify-center flex-shrink-0'>
                                <p className='font-semibold text-lg capitalize'>{guess[idx]}</p>
                            </div>
                            :
                            <div className='bg-gray-700 rounded-md w-12 h-12 inline-flex items-center justify-center flex-shrink-0'>
                                <p className='font-semibold text-lg capitalize'>{guess[idx]}</p>
                            </div>
                        }
                    </>
                ))}
            </div>
        )
    }

    useEffect(() => {

    })

    return (
        <div className='w-full'>

            <p className='font-semibold text-2xl text-center mb-2'>Wordle</p>
            
            <div className="w-fit mx-auto">
                <div className='flex flex-col w-fit mx-auto gap-2 mb-4'>
                    {guesses.map((guess) => (
                        <>
                            {word && renderCompletedWord(guess, word.toUpperCase())}
                        </>
                    ))}
                </div>
                
                <button onClick={getWord} className='w-full my-4 mx-auto bg-indigo-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-indigo-600 active:bg-indigo-700 transition duration-200 ease-in'>
                    Guess Word
                </button>
            </div>

            <Keyboard />

        </div>
    )
}

export default Wordle