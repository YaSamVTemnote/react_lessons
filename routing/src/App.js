import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import UsersListPage from "./modules/users/pages/UsersListPage";
import TodosListPage from "./modules/todo/pages/TodosListPage";
import AboutPage from "./modules/about/pages/AboutPage";
import HomePage from "./modules/about/pages/HomePage";
import NotFoundPage from "./modules/about/pages/NotFoundPage";
import Navigation from "./modules/common/components/Navigation";
import UserDetailsPage from "./modules/users/pages/UserDetailsPage";
import UsersModule from "./modules/users/UsersModule";

function App() {
  return (
      <Router>
          <Navigation/>
          <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/users/*' element={<UsersModule/>} />
              <Route path='/todos' element={<TodosListPage/>} />
              <Route path='/about' element={<AboutPage/>} />
              <Route path='*' element={<Navigate to='/notfound' replace />} />
              <Route path='/notfound' element={<NotFoundPage/>} />
          </Routes>
      </Router>
  );
}

export default App;
