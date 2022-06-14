export const Cart = ({cart, onPlusItem, onMinusItem, totalCount, onRemove, onClear}) => {
    return (
      <div>
        {cart.map(item => (
          <div key={item.id} style={{border:'1px solid red'}}>
            <h2>{item.name}</h2>
            <p>{item.price ? item.price * item.count : item.price}</p>
            <button onClick={() => onPlusItem(item.id)}>+</button>
            <h4>{item.count}</h4>
            <button onClick={() => onMinusItem(item.id)}>-</button>
            <button onClick={() => onRemove(item.id)}>Delete</button>
          </div>
        ))}
        <h1>{totalCount}</h1>
        <button onClick={onClear}>Clear</button>
      </div>
    )
  }