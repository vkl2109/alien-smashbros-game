import '../css/team.css'
import { useState } from 'react'
import { TeamCard } from './TeamCard'

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
            <div className="teamImgs">
                {team.map((member, i) => {
                    if (member) {
                        return (<div key={i} onClick={()=>handleClick(member, i)}>
                            <TeamCard i={i} member={member} isClicked={isClicked} placed={placed} />
                        </div>)
                    }
                    else {
                        return (<div key={i}>
                            <div className="enemyCard">
                                <div className="enemyCard-inner">
                                    <div className="enemy-card-front">
                                        <h4>Empty</h4>
                                        <img className="xImg" src="src/components/images/x.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                })}
            </div>
        </div>
    )
}