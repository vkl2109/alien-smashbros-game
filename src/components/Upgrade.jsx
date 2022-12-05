import '../css/upgrade.css'
import { useState } from 'react'
import { UpgradeCard } from './UpgradeCard.jsx'
import { DisplayCard } from './DisplayCard.jsx'

export const Upgrade = ({ team, setTeam, tokens, setTokens }) => {
    const [ display, setDisplay ] = useState(team[0])

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
                    team.map(member => {
                        return (
                            <UpgradeCard key={member.id} member={member} handleClick={handleClick} display={display}/>
                        )
                    })
                }
            </div>
            <div className="upgradeContainer">
                <DisplayCard display={display} setDisplay={setDisplay}setTeam={setTeam} tokens={tokens} setTokens={setTokens}/>
            </div>
        </div>
    )
}