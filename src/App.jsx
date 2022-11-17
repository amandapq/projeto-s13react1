import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Paragrafo from './components/Paragrafo'
import Footer from './components/Footer'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><h1>Olá, meu primeiro projeto React!: D </h1>
    <Footer> Amanda Pacheco - Futura Desenvolvedora Front-End, em formação pela Reprograma</Footer></>
  )
  }


export default App
