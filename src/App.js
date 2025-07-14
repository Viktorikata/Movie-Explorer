import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import './components/Navbar.css';

function App () {
  return (
    <Router>
      <div className='navbar'>
        <NavLink
          to="/"
          className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}
          >
               🏠 Главная
          </NavLink>
          <NavLink 
            to="/favorites"
            className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}
            >
              ⭐ Избранное
            </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Router>
   );
}

export default App;
