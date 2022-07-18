import React,{useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const   [selectedCategory, setCategory] = useState(items)
  const filterCategory =(e)=>{
    if(e.target.value === 'All'){
      setCategory(items)
    }else{
      const filtered = items.filter(elem=>elem.category === e.target.value)
      setCategory(filtered)
      console.log(filtered)
    }
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>filterCategory(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
