import './App.css';

import useWords from './hooks/useWords';

import Board from './components/board/Board';
import Header from './components/header/Header';
import KeyBoard from './components/keyBoard/KeyBoard';
import Lose from './components/lose/Lose';

const winner = 'COCHE';
const maxTry = 5;

function App() {
  const [words, lastWord, lastKey] = useWords();

  return (
    <div className="App">
      {(words.length>maxTry || lastWord.join('')==winner) && <Lose winner={winner} />}
      <div className='Wrapper'>
        <Header />
        <Board words={words} lastWord={lastWord} lastKey={lastKey} winnerWord={winner}/>
        <KeyBoard keys={words} />
      </div>
    </div>
  );


}

export default App;
