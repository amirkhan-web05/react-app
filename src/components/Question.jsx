import React from 'react'

import {useSelector} from 'react-redux'

export const Question = ({ questions, question, currentQuestionIndex, onClickAnswer }) => {
  const currentAnswer = useSelector(state => state.questions.currentAnswer)
  return (
    <div>
      <h3>{question.length && question[currentQuestionIndex].question}</h3>
      { questions.length && questions[currentQuestionIndex].answers.map(answer => {
        const isCorrectAnswer = questions.length && currentAnswer && answer === questions[currentQuestionIndex].correctAnswer
        const isWrongAnswer = currentAnswer === answer && currentAnswer !== question[currentQuestionIndex].correctAnswer
        return (
          <button
            disabled={currentAnswer ? true : false}
            style={{color:isCorrectAnswer ? 'green' : '' || isWrongAnswer ? 'red' : ''}} 
            onClick={() => onClickAnswer(answer)} 
            key={answer}
          >
            {answer}
          </button>
        )
      })}
    </div>
  )
}
