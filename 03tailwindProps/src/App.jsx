import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myArr = {
    username:"Arjun",
    age: 19
  }
  let newArr = [1,2,3]

  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4
  '>Tailwind test</h1>
  
  <Card username="chai aur code" btnText="Click me"/>
  <Card username="Chai aur React" btnText="Visit me"/>
    </>
  )
}

export default App
