const initialState = {
   questions: [],
   currentQuestionIndex: 0,
   currentAnswer: null,
   showResult: false,
   score: 0,
};

export const questions = (state = initialState, action) => {
   switch (action.type) {
      case 'APP/QUESTIONS': {
         return {
            ...state,
            questions: action.questions,
         };
      }

      case 'APP/NEXT-QUESTION': {
         const showResult =
            state.currentQuestionIndex === state.questions.length - 1;
         const currentQuestionIndex = showResult
            ? state.currentQuestionIndex
            : state.currentQuestionIndex + 1;

         return {
            ...state,
            showResult,
            currentQuestionIndex,
            currentAnswer: '',
         };
      }

      case 'APP/BACK-QUESTION': {
         const backQuestion =
            state.currentQuestionIndex === state.questions.length - 4;
         const currentQuestionIndex = backQuestion
            ? state.currentQuestionIndex
            : state.currentQuestionIndex - 1;

         return {
            ...state,
            currentQuestionIndex,
         };
      }

      case 'APP/CURRENT-ANSWER': {
         const score =
            action.currentAnswer ===
            state.questions[state.currentQuestionIndex].correctAnswer
               ? state.score + 1
               : state.score;

         return {
            ...state,
            currentAnswer: action.currentAnswer,
            score,
         };
      }

      case 'APP/RESTART': {
         return initialState;
      }

      default: {
         return state;
      }
   }
};
