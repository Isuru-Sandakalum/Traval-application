import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import About from './components/About'
import News from './components/News'
import Card from './components/Card'
import Footerelement from './components/Footerelement'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <Body></Body>
      <br/>
      <About></About>
      <br></br>
     <News></News>
     <br></br>
     <Card></Card>
      <br></br>
     <Footerelement></Footerelement>
    </div>
  )
}

export default App
