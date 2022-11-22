import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/components/Header/header'
import Indice from './assets/components/Indice/indice'
import Creditos from './assets/components/creditos/creditos'
import Residuos from './assets/components/residuos/residuos'

function App() {


  return (
    <>
    <Header/>
    <main>
    <Indice/>
    <Residuos/>
    </main>
    <Creditos/>
    </>
    
  )
}

export default App
