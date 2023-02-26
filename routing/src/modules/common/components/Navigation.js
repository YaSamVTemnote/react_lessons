import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import LanguageContext from "../providers/LanguageContext";

const Navigation = () => {
    const {language, toggleLanguage} = useContext(LanguageContext);

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
            <li>
                <button onClick={toggleLanguage}>{language === 'en' ? 'Change language' : 'Изменить язык'}</button>
            </li>
        </ul>
    )
}

export default Navigation
