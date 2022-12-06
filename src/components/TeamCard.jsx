import '../css/team.css'
import { useState } from 'react'

export const TeamCard = ({ i, member, placed, isClicked}) => {
    const [ flip, setFlip ] = useState(true)

    return(
        <div className="enemyCard" style={{transform: isClicked[i] ? "scale(1.1)" : "scale(1)"}}>
            <div className="enemyCard-inner" style={{transform: flip ? "scale(1)" : "rotateY(180deg)", 
            background: isClicked[i] ? "lightblue" : "white"}}>
                <div className="enemy-card-front">
                    <img className="flip" src="src/components/images/flippy.png" onClick={() => setFlip(flip => !flip)} />
                    <h4>{member.name}</h4>
                    {!placed[i] ? (<img src={member.img} className="teamImg"></img>) : (<img className="xImg" src="src/components/images/x.png"></img>)} 
                </div>
                <div className="enemy-card-back">
                    <img className="flip" src="src/components/images/flippy.png" onClick={() => setFlip(flip => !flip)} />
                    <h2>Strength: {member.strength}</h2>
                    <h2>Health: {member.health}</h2>
                    <h2>Range: {member.range}</h2>
                </div>
            </div>
            
        </div>
    )
}