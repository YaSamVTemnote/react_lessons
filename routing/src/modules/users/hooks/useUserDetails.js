import {useEffect, useState} from "react";
import {getUserDetails} from "../services/usersService";

const useUserDetails = (id) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetchUser()
    }, [id]);



    function fetchUser() {
        getUserDetails(id).then(setDetails)
    }

    return{details}
}

export default useUserDetails
