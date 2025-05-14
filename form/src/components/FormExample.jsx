import React from 'react'
import { useState } from 'react'
const FormExample = () => {
    const [name, setName] = useState('')
    function handleChange(event) {
        setName(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(name)
    }
  return (
    <form>
        <label>Name:
            <input type="text" placeholder="Name" onChange={handleChange}/>
        </label>
        <button type="submit">click</button>
    </form>
  )
}

export default FormExample 