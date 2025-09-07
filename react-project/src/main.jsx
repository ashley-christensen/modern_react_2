import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const [firstAnimal, secondAnimal, thirdAnimal] = ["giraffe", "zebra", "lion", "tiger", "bear"];
console.log(secondAnimal) ;

createRoot(document.getElementById('root')).render(
    <App />
)
