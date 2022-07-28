import { Link } from "react-router-dom"

const IconedLink = ({ to, icon, name = to, label = to }) => {
    return (
        <Link className='courses-link' to={to} name={name}>
            <img src={icon} alt="icon" className="icon-container" />
            {label}<br />
        </Link>
    )
}

export default IconedLink