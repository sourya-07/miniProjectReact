import React from 'react'
import { useState, useEffect } from 'react'

let id
const Timer = () => {

  const [time, setTime] = useState(0)



  useEffect(() => {

    id = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)

  }, [])

  
  const handelStop = () => {
    clearInterval(id)
  }
  


  return (
    <>
      <h1>Timer: {time}</h1>
      <button onClick={handelStop}>stop</button>

    </>
  )
}

export default Timer
