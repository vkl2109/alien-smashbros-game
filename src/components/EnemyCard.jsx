import '../css/team.css'
import { useState } from 'react'

export const EnemyCard = ({ member, i }) => {
    const [ flip, setFlip ] = useState(true)

    return(<div key={i} className="enemyCard">
        <div className="enemyCard-inner" style={{transform: flip ? "scale(1)" : "rotateY(180deg)"}}onClick={()=>setFlip(flip => !flip)}>
            <div className="enemy-card-front">
                <h4>{member.name}</h4>
                <img src={member.img} className="teamImg"></img>
            </div>
            <div className="enemy-card-back">
                <h2>Strength: {member.strength}</h2>
                <h2>Health: {member.health}</h2>
            </div>
        </div>
    </div>
    )
}