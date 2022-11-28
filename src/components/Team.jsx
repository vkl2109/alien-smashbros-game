import '../css/team.css'
import { useState } from 'react'

export const Team = ({ enemiesBtn, team, setCurrent, placed, isClicked, setIsClicked }) => {
    const handleClick = (member, i) => {
        if (enemiesBtn && !placed[i]) {
            setCurrent(member);
            let tempClicked = [false, false, false, false, false]
            tempClicked[i] = true;
            setIsClicked(tempClicked);
        }
    }

    return(
        <div className="teamRoster">
            <div className="teamStats">
                {team.map((member, i) => {
                    return (<div key={i} className="teamCardStats">
                        <h5>Strength: {member.strength}</h5>
                        <h5>Health: {member.health}</h5>
                        <h5>Range: {member.range}</h5>
                    </div>)
                })}
            </div>
            <div className="teamImgs">
                {team.map((member, i) => {
                    return (<div key={i} className="teamCard" style={{background: isClicked[i] ? "grey" : "white"}} onClick={()=>handleClick(member, i)}>
                        <h4>{member.name}</h4>
                        {!placed[i] ? (<img src={member.img} className="teamImg"></img>) : (<img className="xImg" src="src/components/images/x.png"></img>)}
                    </div>)
                })}
            </div>
        </div>
    )
}