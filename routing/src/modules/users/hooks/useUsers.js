import {useEffect, useState} from "react";
import {getUserList} from "../services/usersService";

export const useUsers = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchUsers()
    }, []);


    function fetchUsers() {
        getUserList().then(setList)
    }

    return {list, fetchUsers}
}
