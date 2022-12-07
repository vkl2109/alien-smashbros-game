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
        </div>
    )
}