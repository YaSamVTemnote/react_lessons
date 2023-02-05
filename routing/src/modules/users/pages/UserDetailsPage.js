import React from 'react';
import useUserDetails from "../hooks/useUserDetails";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const useCustomNavigate = (navigateTo = '/') => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const moveForward = () => navigate(+1)
    const navigateToPage = () => navigate(navigateTo)

    return {goBack, moveForward, navigateToPage}
}

const withRouter = (Component) => {
    function ComponentWithRouterProps(props) {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return (
            <Component
                {...props}
                routerInfo={{location, navigate, params}}
            />
        )
    }
    return ComponentWithRouterProps
}

const UserDetailsPage = (props) => {

    console.log('props', props)

    const {id} = useParams()

    const {details} = useUserDetails(id)

    // const navigate = useNavigate()
    const navigate = useCustomNavigate()

    const onBackButtonClick = () => {
        navigate.goBack()
    }

    return (<div>
        <h2>User Details Page</h2>
        <div>Name: {details.name}</div>
        {/*<Link to='/users'></Link>*/}
        <button onClick={onBackButtonClick}>Go Back</button>
    </div>)
};

export default withRouter(UserDetailsPage);
