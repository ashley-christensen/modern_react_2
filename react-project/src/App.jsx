import "./App.css"

function Header({name, year}) {
    
    return (
    <header>
      <h1>{name}'s Kitchen</h1>
        <p> Copyright {year} </p>
    </header>
  );
}

function App() {
 return (
    <div>
         <Header name="Ashley" year="2025"/>
    <main> 
         <h2>We serve the most delicious food</h2>
       
     </main>
    </div>
 )
}

export default App
