import React from 'react';
import { Cart } from './components/Cart';
import { CartList } from './components/CartList';
import './index.css';

const questions = [
   {
      questionText: 'What is the capital of France?',
      answers: ['New York', 'London', 'Paris', 'Dublin'],
      correctAnswer: 'New York',
   },
   {
      questionText: 'Who is CEO of Tesla?',
      answers: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tony Stark'],
      correctAnswer: 'Elon Musk',
   },
   {
      questionText: 'The iPhone was created by which company?',
      answers: ['Apple', 'Intel', 'Amazon', 'Microsoft'],
      correctAnswer: 'Apple',
   },
   {
      questionText: 'How many Harry Potter books are there?',
      answers: ['1', '4', '6', '7'],
      correctAnswer: '7',
   },
];

export default function App() {
   const [cart, setCart] = React.useState([]);

   const onAddCart = (obj) => {
      const foundItems = cart.find((item) => item.id === obj.id);

      if (foundItems) {
         setCart((prev) =>
            prev.map((item) => {
               return item.id === obj.id
                  ? { ...item, count: item.count + 1 }
                  : item;
            })
         );
      } else {
         setCart((prev) => [...prev, obj]);
      }
   };

   const onRemoveItem = (id) => {
      setCart((prev) =>
         prev.filter((cart) => {
            return cart.id !== id;
         })
      );
   };

   const plusItem = (id) => {
      setCart((prev) =>
         prev.map((item) => {
            if (item.id === id) {
               return {
                  ...item,
                  count: item.count + 1,
               };
            }

            return item;
         })
      );
   };

   const minusItem = (id) => {
      setCart((prev) =>
         prev.map((item) => {
            if (item.id === id) {
               return {
                  ...item,
                  item: item.count === 1 ? (item.count = 1) : (item.count -= 1),
               };
            }

            return item;
         })
      );
   };

   const totalCount = cart.reduce((acc, item) => {
      return (acc += item.price && item.count * item.price);
   }, 0);

   const onClearItems = () => {
      setCart([]);
   };

   return <div className="App"></div>;
}
