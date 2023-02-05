import React from 'react';
import {Link, useLocation} from "react-router-dom";

const UsersList = ({list}) => {

    const {pathname} = useLocation()

    return (
        <ul>
            {list.map(user => (<li key={user.id}>
                <Link to={`${pathname}/${user.id}`}>{user.name}</Link>
            </li>))}
        </ul>
    )
};

export default UsersList;
