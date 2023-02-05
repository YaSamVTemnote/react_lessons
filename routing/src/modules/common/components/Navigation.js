import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink to='/users'>Users</NavLink>
            </li>
            <li>
                <NavLink to='/todos'>Todos</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
        </ul>
    )
}

export default Navigation
