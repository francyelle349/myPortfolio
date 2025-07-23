import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
         <div className="bg-blue-500 text-white p-8 text-center">
      <h1 className="text-4xl font-bold">Hello Tailwind with Vite!</h1>
      <p className=" text-red-500 mt-4">Testing Tailwind CSS</p>

      <p className="text-red-500">Red text</p>
<p className="text-blue-700">Dark blue text</p>
<p className="text-green-300">Light green text</p>
<p className="text-gray-900">Dark gray text</p>
    </div>
    </>
  )
}

export default App
