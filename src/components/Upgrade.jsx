import '../css/upgrade.css'
import { UpgradeCard } from './UpgradeCard.jsx'
import { DisplayCard } from './DisplayCard.jsx'

export const Upgrade = ({ team, setTeam }) => {
    return(
        <div className="totalUpgrade">
            <div className="cardsContainer">
                {
                    team.map(member => {
                        return (
                            <UpgradeCard member={member} />
                        )
                    })
                }
            </div>
            <div className="upgradeContainer">
                <DisplayCard />
            </div>
        </div>
    )
}