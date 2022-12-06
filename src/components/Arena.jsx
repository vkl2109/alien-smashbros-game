import { useState, useEffect } from 'react';
import { Team } from './Team'
import { Enemy } from './Enemy'
import { ENEMY } from './EnemyTeam'
import '../css/arena.css'

export const Arena = ({ team, setTeam, tokens, setTokens, level, setLevel }) => {
    const [ length, setLength ] = useState(level + 9)
    const [ board, setBoard ] = useState([])
    const [ enemyTeam, setEnemyTeam ] = useState(ENEMY)
    const [ current, setCurrent ] = useState()
    const [ enemiesBtn, setEnemiesBtn ] = useState(false)
    const [ isClicked, setIsClicked ] = useState([false, false, false, false, false])
    const [ placed, setPlaced ] = useState([false, false, false, false, false])
    const [ done, setDone ] = useState(false)
    const [ fightBtn, setFightBtn ] = useState(false)
    const [ points, setPoints ] = useState(0)

    // useEffect(() => {
    //     const request = async () => {
    //         let req = await fetch('http://localhost:3000/ENEMY')
    //         let res = await req.json()
    //         if (req.ok) {
    //             setEnemyTeam(res)
    //         }
    //     }
    //     request()
    // }, [])

    const handleSquareClick = (x, y) => {
        if (!board[y][x] && current) {
            let newBoard = [...board]
            newBoard[y][x] = {...current}
            setBoard(newBoard)
            let newPlaced = [...placed]
            newPlaced[current.id] = [y, x]
            setPlaced(newPlaced)
            setCurrent()
        }
        else if (board[y][x]?.name != "Alien") {
            const character = board[y][x]
            let newBoard = [...board]
            newBoard[y][x] = null
            setBoard(newBoard)
            let newPlaced = [...placed]
            newPlaced[character.id] = false
            setPlaced(newPlaced)
        }
        setIsClicked([false, false, false, false, false])
    }

    const generateEnemies = () => {
        if (!enemiesBtn) {
            let counter = 0
            while(counter < length) {
                let x = Math.floor(Math.random() * length)
                let y = Math.floor(Math.random() * length)
                if (!board[y][x]) {
                    board[y][x] = {...enemyTeam[0]}
                    counter += 1
                }
            }
            setEnemiesBtn(true);
        }
    }
    
    const clearBoard = () => {
        if (fightBtn) {
            board.map((row, y) => {
                row.map((square, x) => {
                    if (square && square.name != 'Alien') {
                        board[y][x] = null
                    }
                })
            })
            setIsClicked([false, false, false, false, false])
            setCurrent()
            setPlaced([false, false, false, false, false])
            setFightBtn(false)
            setDone(false)
            setEnemyTeam(ENEMY)
        }
    }

    const resetGame = () => {
        const newBoard = Array(length).fill(null).map(row => new Array(length).fill(null))
        setBoard(newBoard)
        setIsClicked([false, false, false, false, false])
        setCurrent()
        setPlaced([false, false, false, false, false])
        setEnemiesBtn(false)
        setFightBtn(false)
        setDone(false)
        setEnemyTeam(ENEMY)
        setTokens(tokens => 5)
        setPoints(points => 0)
        setLevel(level => 1)
        setLength(length => 10)
    }

    const fight = () => {
        if (enemiesBtn && done) {
            placed.map((character, i) => {
                let s = team[i].strength
                let r = team[i].range
                let h = team[i].health
                let y = character[0]
                let x = character[1]
                if (x > 0 && board[y][x-1] && board[y][x-1].name == "Alien") {
                    h = h - 1
                    if (s > 0) {
                        board[y][x-1].img = 'src/components/images/fire.png'
                        board[y][x-1].name = 'x'
                        setPoints(points => points + 5)
                        s = s - 1
                    }
                }
                if (x < length - 1 && board[y][x+1] && board[y][x+1].name == "Alien") {
                    h = h - 1
                    if (s > 0) {
                        board[y][x+1].img = 'src/components/images/fire.png'
                        board[y][x+1].name = 'x'
                        setPoints(points => points + 5)
                        s = s - 1
                    }
                }
                if (y > 0 && board[y-1][x] && board[y-1][x].name == "Alien") {
                    h = h - 1
                    if (r > 1 && s > 0) {
                        board[y-1][x].img = 'src/components/images/fire.png'
                        board[y-1][x].name = 'x'
                        setPoints(points => points + 5)
                        s = s - 1
                    }
                }
                if (y < length - 1 && board[y+1][x] && board[y+1][x].name == "Alien") {
                    h = h - 1
                    if (r > 1 && s > 0) {
                        board[y+1][x].img = 'src/components/images/fire.png'
                        board[y+1][x].name = 'x'
                        setPoints(points => points + 5)
                        s = s - 1
                    }
                }
                if (x > 0 && y > 0 && board[y-1][x-1] && board[y-1][x-1].name == "Alien") {
                    if (r > 2 && s > 0) {
                        board[y-1][x-1].img = 'src/components/images/fire.png'
                        board[y-1][x-1].name = 'x'
                        setPoints(points => points + 5)
                        s = s - 1
                    }
                }
                if (x > 0 && y < length - 1 && board[y+1][x-1] && board[y+1][x-1].name == "Alien") {
                    if (r > 2 && s > 0) {
                        board[y+1][x-1].img = 'src/components/images/fire.png'
                        board[y+1][x-1].name = 'x'
                        setPoints(points => points + 5)
                        s = s - 1
                    }
                }
                if (x < length - 1 && y < length - 1 && board[y+1][x+1] && board[y+1][x+1].name == "Alien") {
                    if (r > 2 && s > 0) {
                        board[y+1][x+1].img = 'src/components/images/fire.png'
                        board[y+1][x+1].name = 'x'
                        setPoints(points => points + 5)
                        s = s - 1
                    }
                }
                if (x < length - 1 && y > 0 && board[y-1][x+1] && board[y-1][x+1].name == "Alien") {
                    if (r > 2 && s > 0) {
                        board[y-1][x+1].img = 'src/components/images/fire.png'
                        board[y-1][x+1].name = 'x'
                        setPoints(points => points + 5)
                        s = s - 1
                    }
                }
                setTeam(team => team.map(m => {
                    if (m.id === i) {
                        let newM = {...m, health: h}
                        return newM
                    }
                    return m
                }))
            })
            setFightBtn(true)
        }
    }
    
    useEffect(() => {
        setBoard(board => Array(length).fill(null).map(row => new Array(length).fill(null)))
        setIsClicked([false, false, false, false, false])
        setCurrent()
        setPlaced([false, false, false, false, false])
        setFightBtn(false)
        setDone(false)
        setEnemyTeam(ENEMY)
    }, [length])

    useEffect(()=> {
        if (points >= length*5) {
            setLevel(level => level + 1)
            setPoints(points => 0)
            setTokens(tokens => tokens + 5)
            setEnemiesBtn(false)
            setLength(length => level + 10)
        }
    }, [points])

    useEffect(()=>{
        let tempBool = false
        placed.map(place => {
            if (place) {
                tempBool = true;
            }
        })
        if (tempBool) {
            setDone(true)
        }
    }, [placed])
    return(
        <div className="totalArena">
            <div className="statsBar">
                <h1>Level: {level}</h1>
                <h1>Points: {points}</h1>
                <h1>Tokens: {tokens}</h1>
                <button className="enemiesBtn" style={{background: enemiesBtn ? "red" : "green"}} onClick={generateEnemies}>Enemies</button>
                <button className="fightBtn" style={{background: fightBtn ? "red" : "green"}} onClick={fight}>Fight!</button>
                <button className="clearBtn" onClick={clearBoard}>Next</button>
                <button className="resetBtn" onClick={resetGame}>Reset Game</button>
            </div>
            <div className="arenaContainer">
                <Team enemiesBtn={enemiesBtn}team={team} setCurrent={setCurrent} placed={placed} isClicked={isClicked} setIsClicked={setIsClicked}/>
                <div className="arenaBoundary">
                    {board.map((row, y) => {
                        return (
                            <div key={y} style={{width: '100%', height: `${100/length}%`}} className="gameBoardRow"> 
                                {row.map((square, x) => {
                                    return (
                                        <div key={x} onClick={()=>handleSquareClick(x, y)}style={{width: `${100/length}%`, height: '100%'}} className="gameBoardSquare"> 
                                            {square && (<img className="boardImg"src={square.img}></img>)}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <Enemy enemyTeam={enemyTeam}/>
            </div>
        </div>
    )
}