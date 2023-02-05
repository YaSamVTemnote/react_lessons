import {Navigate, Route, Routes} from "react-router-dom";
import UsersListPage from "./pages/UsersListPage";
import UserDetailsPage from "./pages/UserDetailsPage";

const UsersModule = () => {

    return (<Routes>
        <Route path='/' element={<UsersListPage/>} />
        <Route path='/:id' element={<UserDetailsPage/>} />
        <Route path='*' element={<Navigate to='/notfound' replace />} />
    </Routes>)
}

export default UsersModule
