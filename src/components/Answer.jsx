import React from 'react'

export const Answer = ({answer, onClickAnswer, currentAnswer, correctAnswer}) => {
  // Если есть текущий ответ, то показывай его
  const isCorrectAnswer = currentAnswer && answer === correctAnswer;
  
  // Если currentAnswer равен answer, то показывай только один неправильный ответ
  const isWrongAnswer =
       currentAnswer === answer && currentAnswer !== correctAnswer;

  return (
    <div>
        <button
            className='btn btn__answer'
            disabled={currentAnswer ? true : false}
            style={{
               color:isCorrectAnswer ? '#fff' : '' || isWrongAnswer ? '#fff' : '',
               backgroundColor: isCorrectAnswer
                  ? 'green'
                  : '' || isWrongAnswer
                  ? 'red'
                  : '',
            }}
            onClick={() => onClickAnswer(answer)}
        >
            {answer}
        </button>
    </div>
  )
}
