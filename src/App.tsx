import React from 'react';

//components
import QuestionPart from './components/QuestionPart';

const App = () => {

  const startTrivia = function asnyc () {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score</p>
      <p className='loading'>Loading Questions...</p>
      <QuestionPart />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
