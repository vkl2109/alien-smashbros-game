import '../css/base.css'

export const LibraryCard = ({ member, handleStaged }) => {
    return(
        <div className="baseCard">
            <h4>{member.name}</h4>
            <img src={member.img} placeholder="no image found"></img>
            <div className="btnDiv">
                <button onClick={()=>handleStaged(member)}className="cardUpdate">Add</button>
            </div>
        </div>
    )
}