import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import TodosListPage from "./modules/todo/pages/TodosListPage";
import AboutPage from "./modules/about/pages/AboutPage";
import HomePage from "./modules/about/pages/HomePage";
import NotFoundPage from "./modules/about/pages/NotFoundPage";
import Navigation from "./modules/common/components/Navigation";
import UsersModule from "./modules/users/UsersModule";
import LanguageContext from "./modules/common/providers/LanguageContext";
import {useState} from "react";


function App() {
    const [language, setLanguage] = useState('en')

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ru' : 'en')
    }

    const value = {language, toggleLanguage}

  return (
      <LanguageContext.Provider value={value}>
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
      </LanguageContext.Provider>
  );
}

export default App;
