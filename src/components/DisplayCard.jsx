import '../css/upgrade.css'
import { useState } from 'react'

export const DisplayCard = ({ display, setDisplay, setTeam, tokens, setTokens }) => {

    const [ broke, setBroke ] = useState(false)
    const [ maxed, setMaxed ] = useState(false)
    const [ maxTrait, setMaxTrait ] = useState()

    const Maxed = () => {
        return(
            <div className="broke">
                <button onClick={() => setMaxed(false)}>X</button>
                <p>Max {maxTrait}!!</p>
            </div>
        )
    }

    const handleStrength = () => {
        if (tokens === 0) {
            setBroke(true)
        }
        else if (display.strength === 5) {
            setMaxed(true)
            setMaxTrait("Strength")
        }
        else {
            setTeam(team => team.map(member => {
                if (member.id == display.id) {
                    let newMember = {...member, strength: member.strength + 1}
                    setDisplay(display => newMember)
                    return newMember
                }
                return member
            }))
            setTokens(tokens => tokens - 1)
        }
    }

    const handleHealth = () => {
        if (tokens === 0) {
            setBroke(true)
        }
        else if (display.health === 10) {
            setMaxed(true)
            setMaxTrait("Health")
        }
        else {
            setTeam(team => team.map(member => {
                if (member.id == display.id) {
                    let newMember = {...member, health: 10}
                    setDisplay(display => newMember)
                    return newMember
                }
                return member
            }))
            setTokens(tokens => tokens - 1)
        }
    }

    const handleRange = () => {
        if (tokens === 0) {
            setBroke(true)
        }
        else if (display.range === 3) {
            setMaxed(true)
            setMaxTrait("Range")
        }
        else {
            setTeam(team => team.map(member => {
                if (member.id == display.id) {
                    let newMember = {...member, range: member.range + 1}
                    setDisplay(display => newMember)
                    return newMember
                }
                return member
            }))
            setTokens(tokens => tokens - 1)
        }
    }
    return (
        <div className="displayCard">
            <div className="titleDisplay">
                <h1>{display.name}</h1>
            </div>
            <div className="headers">
                <div className="miniCard" onClick={handleStrength}>
                    <p>Strength</p>
                    <h3>{display.strength}</h3>
                    <p>$1</p>
                </div>
                <div className="miniCard" onClick={handleHealth}>
                    <p>Health</p>
                    <h3>{display.health}</h3>
                    <p>$1</p>
                </div>
                <div className="miniCard" onClick={handleRange}>
                    <p>Range</p>
                    <h3>{display.range}</h3>
                    <p>$1</p>
                </div>
            </div>
            {broke && <div className="broke">
                <button onClick={() => setBroke(false)}>X</button>
                <p>Not enough tokens!!</p>
            </div>}
            {maxed && <Maxed />}
        </div>
    )
}