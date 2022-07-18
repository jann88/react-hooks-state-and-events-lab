import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [light,setLight] = useState(false)
const [theme,setTheme] = useState('Light Mode')
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = light? "App dark" : "App light"
  
  const changeTheme =()=>{
    if(light === true){
      setLight(false)
      setTheme('Light Mode')
    }else{
      setLight(true)
      setTheme('Dark Mode')
    }
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeTheme}>{theme}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
