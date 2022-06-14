export const CartItems = ({id, name, price, count, onAdd}) => {
    return (
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={() => onAdd({id, name, price, count})}>Add in Cart</button>
      </div>
    )
}