import '../css/base.css'

export const BaseCard = ({ member, handleRemove }) => {
    return(
        <div className="baseCard">
            <h4>{member.name}</h4>
            <img src={member.img} placeholder="no image found"></img>
            <div className="btnDiv">
                <button onClick={()=>handleRemove(member)}className="cardDelete">Remove</button>
            </div>
        </div>
    )
}