import React, {useContext} from "react";
import LanguageContext from "../providers/LanguageContext";
import {useFormikContext} from "formik";


const SubmitButton = () => {
    const {language} = useContext(LanguageContext);

    const formik = useFormikContext()

    return  <button type='submit' disabled={!formik.isValid}>{language === 'en' ? 'Save': 'Сохранить'}</button>
}

export default SubmitButton
