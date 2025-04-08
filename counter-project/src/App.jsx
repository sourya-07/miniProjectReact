import { useState } from 'react' // Hook comes from here !
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


  const addValue = () => {
    // console.log('Clicked',counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter > 0) {
    setCounter(counter - 1)
    } 
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value{counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
