import '../css/upgrade.css'

export const UpgradeCard = ({ member }) => {
    return(
        <div className="card">
            <h4>{member.name}</h4>
            <p>Strength: {member.strength}</p>
            <p>Health: {member.health}</p>
            <p>Range: {member.range}</p>
            <img src={member.img} placeholder="no image found"></img>
            <div className="btnDiv">
                <button className="cardUpdate">Upgrade</button>
            </div>
        </div>
    )
}