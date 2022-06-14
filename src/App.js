import axios from 'axios';
import React from 'react';
import { Question } from './components/Question';
import './index.css';

export default function App() {
   const [index, setIndex] = React.useState(0);
   const [score, setScore] = React.useState(0);
   const [questions, setQuestions] = React.useState([]);
   const [showResult, setShowResult] = React.useState(false);
   const [currentAnswer, setCurrentAnswer] = React.useState(null);

   const fetchQestions = async () => {
      try {
         await axios.get('http://localhost:3000/db.json').then(({ data }) => {
            setQuestions(data);
         });
      } catch (e) {
         alert('Error:', e);
      }
   };

   const nextQuestion = () => {
      const result = index === questions.length - 1;
      if (result) {
         setIndex(index);
         setShowResult(true);
      } else {
         setIndex((prev) => prev + 1);
         setCurrentAnswer('');
      }
   };

   const backQuestion = () => {
      const result = index === questions.length - 4;
      if (result) {
         setIndex(index);
      } else {
         setIndex((prev) => prev - 1);
      }
   };

   const checkAnswer = (answer) => {
      setCurrentAnswer(answer);
      if (answer === questions[index].correctAnswer) {
         setScore((prev) => prev + 1);
      } else {
         setScore(score);
      }
   };

   const restartQuiz = () => {
      setQuestions(questions);
      setShowResult(false);
      setCurrentAnswer('');
      setScore(0);
   };

   React.useEffect(() => {
      fetchQestions();
   }, []);

   return (
      <div className="app">
         <div className="app__inner">
            {!showResult ? (
               <>
                  <Question
                     answers={questions.length && questions[index].answers}
                     questionText={
                        questions.length && questions[index].questionText
                     }
                     onClickAnswer={checkAnswer}
                     currentAnswer={currentAnswer}
                     score={score}
                     questions={questions}
                     correctAnswer={
                        questions.length && questions[index].correctAnswer
                     }
                  />
                  <div className="app__btn">
                     <button
                        className="app__btn-item app__btn-back"
                        onClick={backQuestion}
                     >
                        Back
                     </button>
                     <button
                        className="app__btn-item app__btn-next"
                        onClick={nextQuestion}
                     >
                        Next
                     </button>
                  </div>
               </>
            ) : (
               <div>
                  <h1 className="question__end">The End</h1>
                  <span className="question__score">
                     Score: {score} / {questions.length}
                  </span>
                  <div className="question__restart">
                     <button
                        onClick={restartQuiz}
                        className="question__restart-item"
                     >
                        Restart
                     </button>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
