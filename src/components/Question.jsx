import React from 'react'
import { Answer } from './Answer'

export const Question = ({questionText, score, questions, currentAnswer, correctAnswer, answers, onClickAnswer}) => {
  return (
    <div>
      <div className='question__info'>
        <h2 className='question__title'>React Quiz</h2>
        <h3 className='question__text'>{questionText}</h3>
        <span className='question__score'>
          {score} / {questions.length}
        </span>
      </div>
      <div className='question__answers'>
        {answers && answers.map(answer => (
          <Answer 
            key={answer} 
            answer={answer}
            currentAnswer={currentAnswer}
            correctAnswer={correctAnswer}
            onClickAnswer={onClickAnswer}
          />
        ))}
      </div>
    </div>
  )
}
