import { useEffect, useState } from "react";

const maxLettersWord = 5;

const normalWords = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ñ','Z','X','C','V','B','N','M']


export default function useWords(){

    const [words, setWords] = useState([[]]);
    const [lastWord, setLastWord] = useState([]);

    const [lastKey, setLastKey] = useState()

    
    const keyUpHandler = e => {
        let key = e.key.toUpperCase() ;
        setLastKey(key)

        if (lastWord.length<5 && normalWords.includes(key)) {
            let newLastWord = [...lastWord]
            newLastWord.push(key)
            setLastWord(newLastWord);
        }

        if (key == 'BACKSPACE') {
            let newLastWord = [...lastWord]
            newLastWord.pop()
            setLastWord(newLastWord);
        }

        if(lastWord.length>=5 && key == 'ENTER') {
            let newWords = [...words]
            newWords.push(lastWord)
            setWords(newWords);
            setLastWord([])
        }

    }


    useEffect(()=>{
        document.addEventListener('keyup', keyUpHandler);

        return () => {
            document.removeEventListener('keyup', keyUpHandler);
        }

    },[words, lastWord])

    return [words, lastWord, lastKey];
}