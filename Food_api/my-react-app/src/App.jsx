import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [food, setFood] = useState("")
  const apiKey = process.env.REACT_APP_API_KEY

  const getFood = async()=> {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine&greek`)
    .then(response => response.json())
    .then(data => setFood(data.results))
    .catch(error => console.error(error))
  }

  useEffect(() =>{
    getFood()
  },[])

    console.log(food)

  return (
    <>
      <h1>Hello EriktheMan</h1>
    </>
  )
}

export default App
