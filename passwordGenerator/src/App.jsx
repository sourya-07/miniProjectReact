import { useState, useCallback, useEffect } from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str =
      'ABCDEFGHIJKLMANOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*-+{}[]~`'
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, numberAllowed, charAllowed, setpassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 text-gray-600'
            placeholder='password'
            readOnly />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>
        <div className='flex justify-between items-center text-sm gap-x-4 mb-2'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              checked={charAllowed}
              id='charInput'
              onChange={() => setcharAllowed(prev => !prev)}
            />
            <label htmlFor="charInput">Characters</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
