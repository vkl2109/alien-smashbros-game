import '../css/header.css'
import { Link } from "react-router-dom";


export const Header = ({ level }) => {
    return(
        <div className="navbar">
            <Link to={'/upgrade'} className="link-title"><h1>Upgrade</h1></Link>
            <Link to={'/'} className="link-title"><h1>Battle</h1></Link>
        </div>
)
}