import '../css/team.css'

export const Enemy = ({ enemyTeam }) => {
    return(
        <div className="enemyRoster">
            <div className="teamImgs">
                {enemyTeam.map((member, i) => {
                    return (<div key={i} className="teamCard">
                        <h4>{member.name}</h4>
                        <img src={member.img} className="teamImg"></img>
                    </div>)
                })}
            </div>
            <div className="teamStats">
                {enemyTeam.map((member, i) => {
                    return (<div key={i} className="teamCardStats">
                        <h5>Strength: {member.strength}</h5>
                        <h5>Health: {member.health}</h5>
                    </div>)
                })}
            </div>
        </div>
    )
}