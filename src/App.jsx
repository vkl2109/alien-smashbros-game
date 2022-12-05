import './App.css'
import { Header } from './components/Header'
import { Arena } from './components/Arena'
import { Upgrade } from './components/Upgrade'
import { useState, useEffect } from 'react'
import { STARTER } from './components/StarterTeam'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [ team, setTeam ] = useState(STARTER);
  const [ tokens, setTokens ] = useState(5);
  const [ level, setLevel ] = useState(1);

  // useEffect(() => {
  //       const request = async () => {
  //           let req = await fetch('http://localhost:3000/STARTER')
  //           let res = await req.json()
  //           if (req.ok) {
  //               setTeam(res)
  //           }
  //       }
  //       request()
  //   }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route path={'/'} element={<Arena team={team} setTeam={setTeam} tokens={tokens} setTokens={setTokens} level={level} setLevel={setLevel}/>}/>
            <Route path={'/upgrade'} element={<Upgrade team={team} setTeam={setTeam} tokens={tokens} setTokens={setTokens} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
