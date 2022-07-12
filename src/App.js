import './App.css';

import useWords from './hooks/useWords';

import Board from './components/board/Board';
import Header from './components/header/Header';
import KeyBoard from './components/keyBoard/KeyBoard';

const winner = 'COCHE';
const maxTry = 5;

function App() {
  const [words, lastWord, lastKey] = useWords();

  if (words.length>maxTry) return (<h1>End.</h1>)
  else if (lastWord.join('')==winner) return(<h1>Winner</h1>)
  return (
    <div className="App">
      <div className='Wrapper'>
        <Header />
        <Board words={words} lastWord={lastWord} lastKey={lastKey} winnerWord={winner}/>
        <KeyBoard keys={words} />
      </div>
    </div>
  );


}

export default App;
