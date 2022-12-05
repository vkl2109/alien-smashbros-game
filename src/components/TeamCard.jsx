import '../css/team.css'
import { useState } from 'react'

export const TeamCard = ({ i, member, placed, isClicked}) => {
    const [ flip, setFlip ] = useState(true)

    return(
        <div className="teamCard" style={{background: isClicked[i] ? "lightblue" : "white",
        transform: isClicked[i] ? "scale(1.1)" : "scale(1)"}}>
            <button onClick={() => setFlip(flip => !flip)}>()</button>
            <h4>{member.name}</h4>
            {flip ? (!placed[i] ? (<img src={member.img} className="teamImg"></img>) : (<img className="xImg" src="src/components/images/x.png"></img>)) : 
            (<div>
                <p>Strength: {member.strength}</p>
                <p>Health: {member.health}</p>
                <p>Range: {member.range}</p>
            </div>)}
        </div>
    )
}