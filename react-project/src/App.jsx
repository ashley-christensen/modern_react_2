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
        <main>
            <img src={chef} height={200} alt="photo of smiling chef owner"/>
            <ul>
               {dishes.map((dish) => (
                <li key={dish.id} style={{ listStyleType: "none"}}>{dish.title}</li>
               ))}
            </ul>
        </main>

    )
}

function App() {
 return (
    <div>
         <Header name="Ashley" year="2025"/>
         <Main dishes = {dishObjects}/>

    </div>
 )
}

export default App
