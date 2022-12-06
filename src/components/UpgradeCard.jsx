import '../css/upgrade.css'

export const UpgradeCard = ({ member, handleClick, display }) => {
    return(
        <div className="card" style=
        {{transform: display.id === member.id ? "scale(1.1)" : "scale(1)",
        background: display.id === member.id ? "rgba(173, 216, 230, 0.9)" : "rgba(255, 255, 255, 1)"}}>
            <h4>{member.name}</h4>
            <p>Strength: {member.strength}</p>
            <p>Health: {member.health}</p>
            <p>Range: {member.range}</p>
            <img src={member.img} placeholder="no image found"></img>
            <div className="btnDiv">
                <button onClick = {() => handleClick(member)} className="cardUpdate">Upgrade</button>
            </div>
        </div>
    )
}