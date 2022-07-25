import { useState } from 'react'
import './App.css'
import Content from './components/weatherApp'
import { ReactDOM } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Content/>
    </div>
  )
}

export default App
