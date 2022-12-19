import '../css/upgrade.css'
import { useState } from 'react'
import { UpgradeCard } from './UpgradeCard.jsx'
import { DisplayCard } from './DisplayCard.jsx'

export const Upgrade = ({ team, setTeam, tokens, setTokens }) => {

    let first = null

    team.map(m => {
        if (m && first === null) {
            first = m
        }
    })

    const [ display, setDisplay ] = useState(first)

    const handleClick = (member) => {
        setDisplay(display => member)
    }

    return(
        <div className="totalUpgrade">
            <div className="statsBar">
                <h1>Tokens: {tokens}</h1>
            </div>
            <div className="cardsContainer">
                {
                    team.map((member, i) => {
                        if (member) {
                            return (
                                <UpgradeCard key={i} member={member} handleClick={handleClick} display={display}/>
                            )
                        }
                        else {
                            return (
                                <div className="card">
                                    <h4>Empty</h4>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <img src="/images/x.png" placeholder="no image found"></img>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="upgradeContainer">
                {display && <DisplayCard display={display} setDisplay={setDisplay}setTeam={setTeam} tokens={tokens} setTokens={setTokens}/>}
            </div>
        </div>
    )
}