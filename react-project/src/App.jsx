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

function Main({dishes, openStatus, onStatus}) {
    console.log("test")
    return (
        <>
        <div>
            <button onClick={() => onStatus(true)}/> 
            <h2>Welcome to our wonderful restaurant. We're: {openStatus ? "Open" : "Closed"}</h2>
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
    const [status, setStatus] = useState(true);
 return (
    <div>
        <h1>The restaurant is currently {status ? "Open" : "Closed"}</h1>
        <button onClick={() => setStatus(!status)}>{status ? "Close" : "Open"} Restaurant</button>
         <Header name="Ashley" year="2025"/>
         <Main dishes = {dishObjects} openStatus={status} onStatus={setStatus}/>

    </div>
 )
}

export default App
