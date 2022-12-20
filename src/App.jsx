import './App.css'
import { Header } from './components/Header'
import { Arena } from './components/Arena'
import { Upgrade } from './components/Upgrade'
import { Base } from './components/Base'
import { useState, useEffect } from 'react'
import { STARTER } from './components/StarterTeam'
import { LIBRARY } from './components/Library'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [ team, setTeam ] = useState(STARTER);
  const [ tokens, setTokens ] = useState(5);
  const [ level, setLevel ] = useState(1);
  const [ library, setLibrary ] = useState(LIBRARY)
  const [ difficulty, setDifficulty ] = useState("easy")

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
            <Route path={'/base'} element={<Base team={team} setTeam={setTeam} library={library} setLibrary={setLibrary}/>}/>
            <Route path={'/'} element={<Arena team={team} setTeam={setTeam} tokens={tokens} setTokens={setTokens} level={level} setLevel={setLevel} difficulty={difficulty} setDifficulty={setDifficulty}/>}/>
            <Route path={'/upgrade'} element={<Upgrade team={team} setTeam={setTeam} tokens={tokens} setTokens={setTokens} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
