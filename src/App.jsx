import './App.css'
import { Header } from './components/Header'
import { Arena } from './components/Arena'
import { Upgrade } from './components/Upgrade'
import { useState } from 'react'
import { STARTER } from './components/StarterTeam'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [ level, setLevel ] = useState(1);
  const [ team, setTeam ] = useState(STARTER);
  return (
    <BrowserRouter>
      <div className="App">
        <Header level={level}/>
        <Routes>
            <Route path={'/'} element={<Arena team={team} setTeam={setTeam} level={level} setLevel={setLevel}/>}/>
            <Route path={'/upgrade'} element={<Upgrade team={team} setTeam={setTeam} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
