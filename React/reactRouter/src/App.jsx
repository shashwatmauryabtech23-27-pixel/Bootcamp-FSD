import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  return (
    <UserContextProvider>
      <h1>React with Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
