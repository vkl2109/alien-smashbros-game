import '../css/team.css'
import { EnemyCard } from './EnemyCard'

export const Enemy = ({ enemyTeam }) => {
    return(
        <div className="enemyRoster">
            <div className="teamImgs">
                {enemyTeam.map((member, i) => {
                    return (
                    <div key={i}> 
                        <EnemyCard member={member} i={i}/> 
                    </div>)
                })}
            </div>
            {/* <div className="teamStats">
                {enemyTeam.map((member, i) => {
                    return (<div key={i} className="teamCardStats">
                        <h5>Strength: {member.strength}</h5>
                        <h5>Health: {member.health}</h5>
                    </div>)
                })}
            </div> */}
        </div>
    )
}