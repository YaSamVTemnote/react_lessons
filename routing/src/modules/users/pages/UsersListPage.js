import React from 'react';
import {useUsers} from "../hooks/useUsers";
import UsersList from "../components/UsersList";

const UsersListPage = () => {

    const {list} = useUsers()

    return <div>
        <h2>Users List Page</h2>
        <UsersList list={list}/>
    </div>
};

export default UsersListPage;
