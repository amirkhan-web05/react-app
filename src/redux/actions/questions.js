import axios from 'axios';

export const setNextQuestion = (currentQuestionIndex) => ({
   type: 'APP/NEXT-QUESTION',
   currentQuestionIndex,
});

export const setBackQuestion = (currentQuestionIndex) => ({
   type: 'APP/BACK-QUESTION',
   currentQuestionIndex,
});

export const setRestart = () => ({
   type: 'APP/RESTART',
});

export const setCurrentAnswer = (currentAnswer) => ({
   type: 'APP/CURRENT-ANSWER',
   currentAnswer,
});

export const fetchQuestions = () => (dispatch) => {
   axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setQuestions(data));
   });
};

export const setQuestions = (questions) => ({
   type: 'APP/QUESTIONS',
   questions,
});
