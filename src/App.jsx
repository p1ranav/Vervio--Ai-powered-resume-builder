// App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard.jsx'
import LandingPage from './LandingPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Dashboard/> */}
    <LandingPage/>
    </>
  )
}

export default App