import { useState } from 'react'
import FormExample from "./components/FormExample"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormExample/>
    </>
  )
}

export default App
