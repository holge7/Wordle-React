import './keyBoard.css';

import { useEffect, useState, useRef } from 'react';

const keyBoard = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L','Ñ'],
    ['ENVIAR','Z','X','C','V','B','N','M', 'borr'],
]

export default (props) => {
    const [letters, setLetters] = useState([])
    useEffect(()=>{

        let newLetters = [].concat(...props.keys);
        let cleanLetters = newLetters.filter((letter, i)=>{
            return newLetters.indexOf(letter) == i
        })
        setLetters(cleanLetters)

        
    }, [props.keys])

    

    document.addEventListener('keyup', (e)=>{
        console.log('keyup listener')
        console.log(e)
    })

    return (
        <div className="keyBoard">
            {keyBoard.map(row => 
                <div className='keyBoard-row'>
                    {row.map(letter => 
                        <div key={letter} className={`keyBoard-letter ${letters.includes(letter) ? 'keyBoard-letter-use' : ''}`}>{letter}</div>
                    )}
                </div>
            )}

        </div>
    )
}