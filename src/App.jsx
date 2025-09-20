import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <div>Please click on the buttons below to update value of counter: {counter}</div>
     <button className='custom_button' onClick={addValue}>Add Value</button>
     <button className='custom_button' onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
