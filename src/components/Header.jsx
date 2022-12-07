import '../css/header.css'
import { Link } from "react-router-dom";


export const Header = () => {
    return(
        <div className="navbar">
            <Link to={'/'} className="link-title"><h1>Base</h1></Link>
            <Link to={'/arena'} className="link-title"><h1>Arena</h1></Link>
            <Link to={'/upgrade'} className="link-title"><h1>Upgrade</h1></Link>
        </div>
    )
}