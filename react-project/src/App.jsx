import { useState } from "react";
import "./App.css"
import chef from "./images/chef.jpg"

function Header({name, year}) {
    
    return (
    <header>
      <h1>{name}'s Kitchen</h1>
        <p> Copyright {year} </p>
    </header>
  );
}

const items = ["Salad", "Salmon", "Fruit", "Steak", "Chicken"]
const dishObjects = items.map((dish, i) => ({
    id: i, 
    title: dish
}))

function Main({dishes}) {
    return (
        <>
        <div>
            <h2>Menu</h2>
        </div>
        <main>
            <img 
                src={chef} 
                height={200} 
                alt="photo of a smiling chef owner"/>
            <ul>
               {dishes.map((dish) => (
                <li key={dish.id} style={{ listStyleType: "none"}}>{dish.title}</li>
               ))}
            </ul>
        </main>
        </>
    )
}

function App() {
    const [isOpen, setIsOpen] = useState(true);
    console.log(isOpen);
 return (
    <div>
        <h1>The restaurant is currently {isOpen ? "Opened" : "Closed"}</h1>
        <button onClick={() => setIsOpen(prev => !prev)}>{isOpen ? "Close" : "Open"} Restaurant</button>
         <Header name="Ashley" year="2025"/>
         <Main dishes = {dishObjects}/>

    </div>
 )
}

export default App
