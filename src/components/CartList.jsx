import { CartItems } from "./CartItems"

export const CartList = ({items, onAdd}) => {
  return (
    <div>
      {items.map(item => (
        <CartItems key={item.id} {...item} onAdd={onAdd}/>
      ))}
    </div>
  )
}