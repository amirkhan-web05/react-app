import React, { useEffect } from 'react';
import { Question } from './components/Question';

import { useDispatch, useSelector } from 'react-redux';
import {
   fetchQuestions,
   setBackQuestion,
   setCurrentAnswer,
   setNextQuestion,
   setRestart,
} from './redux/actions/questions';

const App = () => {
   const dispatch = useDispatch();
   const questions = useSelector((state) => state.questions.questions);
   const currentQuestionIndex = useSelector(
      (state) => state.questions.currentQuestionIndex
   );
   const currentQuestionBackIndex = useSelector(
      (state) => state.questions.currentQuestionBackIndex
   );
   const showResult = useSelector((state) => state.questions.showResult);
   const score = useSelector((state) => state.questions.score);

   console.log(questions);

   const backQuestion = () => {
      dispatch(setBackQuestion(currentQuestionBackIndex));
   };

   const nextQuestion = () => {
      dispatch(setNextQuestion(currentQuestionIndex));
   };

   const restartQuestions = () => {
      if (questions.length) {
         dispatch(setRestart());
         dispatch(fetchQuestions());
      }
   };

   const onClickAnswer = (answer) => {
      dispatch(setCurrentAnswer(answer));
   };

   useEffect(() => {
      dispatch(fetchQuestions());
   }, []);

   return (
      <div>
         <h1>
            {score} / {questions.length}
         </h1>
         {!showResult ? (
            <>
               <Question
                  questions={questions}
                  currentQuestionIndex={currentQuestionIndex}
                  onClickAnswer={onClickAnswer}
                  question={questions}
               />
               <button onClick={backQuestion}>Back</button>
               <button onClick={nextQuestion}>Next</button>
            </>
         ) : (
            <div>
               <h1>Result</h1>
               <button onClick={restartQuestions}>Restart</button>
            </div>
         )}
      </div>
   );
};

export default App;
