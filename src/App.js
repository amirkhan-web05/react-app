import React from 'react';
import { Cart } from './components/Cart';
import { CartList } from './components/CartList';
import './index.css';

const items = [
   { id: 1, name: 'Apple', price: 100, count: 1 },
   { id: 2, name: 'Banan', price: 200, count: 1 },
   { id: 3, name: 'Orange', price: 300, count: 1 },
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

   return (
      <div className="App">
         <CartList onAdd={onAddCart} items={items} />
         <Cart
            onPlusItem={plusItem}
            onMinusItem={minusItem}
            onRemove={onRemoveItem}
            onClear={onClearItems}
            cart={cart}
            totalCount={totalCount}
         />
      </div>
   );
}
