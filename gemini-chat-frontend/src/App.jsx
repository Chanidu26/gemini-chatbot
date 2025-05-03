import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count +1)
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      
    </>
  )
}

export default App
