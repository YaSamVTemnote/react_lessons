import React, {useContext, useEffect, useState} from 'react';
import useUserDetails from "../hooks/useUserDetails";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import LanguageContext from "../../common/providers/LanguageContext";
import {useFormik, Formik, Form, Field, ErrorMessage} from "formik";
import userDetailsSchema from "../validation/userDetailsSchema";
import SubmitButton from "../../common/form/SubmitButton";

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
    const {id} = useParams()
    const {details} = useUserDetails(id)

    const {language} = useContext(LanguageContext);
    const navigate = useCustomNavigate()

    const onBackButtonClick = () => {
        navigate.goBack()
    }

    const onSubmit = (values) => {
        console.log(values)
    }

    return details ?
        (<div>
            <h2>User Details Page</h2>
            <Formik initialValues={details} onSubmit={onSubmit} validationSchema={userDetailsSchema}>
                {(formik) => {
                    return (
                        <Form>
                            <div>
                                <label htmlFor='name'>Name: </label>
                                <Field name='name' id='name'/>
                                <ErrorMessage name='name'/>
                            </div>
                            <div>
                                <label htmlFor='email'>Email: </label>
                                <Field name='email' id='email'/>
                            </div>
                            <button type='button' onClick={onBackButtonClick}>{language === 'en' ? 'Go Back' : 'Вернуться'}</button>
                            <SubmitButton/>
                        </Form>
                    )
                }
                }
            </Formik>
        </div>)
        : 'Loading...'
};

export default withRouter(UserDetailsPage);
