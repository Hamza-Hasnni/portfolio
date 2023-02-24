import React from 'react'
import {Navbar} from './components'
import './App.scss'
import {Header, About, Work, Skills, Footer} from './container'

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default App