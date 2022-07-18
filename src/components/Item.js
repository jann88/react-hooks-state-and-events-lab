import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState('')
  const [text, setText] = useState('Add to Cart')
  
  //const { container } = render<Item name="Milk" category="Dairy" />
  function handleCart(){
    if(text === 'Add to Cart'){
      setCart('in-cart')
      setText('Remove From Cart')
    }else{
      setCart('')
      setText('Add to Cart')
    }
  }
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{text}</button>
    </li>
  );
}

export default Item;
