import './board.css'
import Box from '../box/Box';
import shortid from 'shortid';

const maxTry = 5;
const wordLenght = 5;


const getWords = (words, lastWord, winnerWord) => {

    let letters=[];
    let arrIndexAux=0;

    //Words Fill
    let status, delay;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            
            //Correct place
            if (winnerWord[j] == words[i][j]) status = "place";
            //Include
            else if (winnerWord.includes(words[i][j])) status = "include";
            //Bad letter
            else status = 'noInclude';

            delay = (0.13*j)+"s";
            
            letters.push(<Box key={arrIndexAux} lastLetter={false} delay={delay} check={true} letter={words[i][j]} status={status} />)

            arrIndexAux++;
        }
    }
    
    //Current word
    for (let i = 0; i < lastWord.length-1; i++) {
        letters.push(<Box key={arrIndexAux} lastLetter={false} letter={lastWord[i]} />)
        arrIndexAux++;
    }

    //Last letter
    letters[arrIndexAux] =  <Box key={shortid.generate()} lastLetter={true} letter={lastWord[lastWord.length-1]} />
    arrIndexAux++;

    //Free box
    for (let i = arrIndexAux; i < (maxTry*wordLenght); i++) {
        letters.push(<Box key={i} />)
    }
    

    return letters
}

export default (props) => {

    
    
    return (
        <div className='board-wrapper'>
            <div className='board'>
                {getWords(props.words, props.lastWord, props.winnerWord)}
            </div>
        </div>
    )
}
