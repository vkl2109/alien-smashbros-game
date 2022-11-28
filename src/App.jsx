import './App.css'
import { Header } from './components/Header'
import { Arena } from './components/Arena'
import { Upgrade } from './components/Upgrade'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [ level, setLevel ] = useState(1);
  return (
    <BrowserRouter>
      <div className="App">
        <Header level={level}/>
        <Routes>
            <Route path={'/'} element={<Arena level={level} setLevel={setLevel}/>}/>
            <Route path={'/upgrade'} element={<Upgrade />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
