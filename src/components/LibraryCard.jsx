import '../css/base.css'
import { useState } from 'react'

export const LibraryCard = ({ member, handleStaged }) => {
    const [ flip, setFlip ] = useState(true)

    return(
        <div className="baseCard">
            <div className="baseCard-inner" style={{transform: flip ? "scale(1)" : "rotateY(180deg)"}} onClick={()=>setFlip(flip => !flip)}>
                <div className="base-card-front">
                    <h4>{member.name}</h4>
                    <img src={member.img} placeholder="no image found"></img>
                    <div className="btnDiv">
                        <button onClick={()=>handleStaged(member)}className="cardUpdate">Add</button>
                    </div>
                </div>
                <div className="base-card-back">
                    <h2>Strength: {member.strength}</h2>
                    <h2>Health: {member.health}</h2>
                    <h2>Range: {member.range}</h2>
                </div>
            </div>
        </div>
    )
}