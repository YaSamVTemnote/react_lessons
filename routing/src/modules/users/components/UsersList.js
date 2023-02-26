import React, {useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import LanguageContext from "../../common/providers/LanguageContext";

const UsersList = ({list}) => {

    const {pathname} = useLocation()
    const value = useContext(LanguageContext);
    console.log(value)
    return (
            <ul>
                {list.map(user => (<li key={user.id}>
                    <Link to={`${pathname}/${user.id}`}>{user.name}</Link>
                </li>))}
            </ul>
    )
};

export default UsersList;
