import { useState } from 'react'

import './App.css'
import Home from './Home'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Home/>
     <About/>
 
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
    </>
  )
}

export default App
