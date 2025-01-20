import React from 'react';
import { NavLink, useNavigate, Link  } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/chat_app_logo.png';
import 'boxicons'

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

  return (
    <div className="header">
        <div className="logo_container">
            <img  className="logo" alt="logo chat app" src={logo} />
        </div>

      <nav>
            <div className="main_nav">
                <NavLink className="button" to="/"><box-icon  name='home' type='solid' color='white' /><span>Home</span></NavLink>
                <NavLink className="button" to="/research"><box-icon  name='search' type='regular' color='white' /><span>Research</span></NavLink>
                <NavLink className="button" to="/messages"><box-icon  name='send' type='solid' color='white' /><span>Messages</span></NavLink>
                <NavLink className="button" to="/profil"><box-icon  name='user' type='solid' color='white' /><span>Profil</span></NavLink>
            </div>
            <div className="main_nav">
                <NavLink className="button" to="/settings"><box-icon  name='cog' type='solid' color='white' /><span>Settings</span></NavLink>
                <NavLink onClick={handleLogout}  className="button" ><box-icon color='white' name='log-out'></box-icon><span >Déconnexion</span></NavLink>
            </div>
        </nav>
    </div>
  );
}

export default Header;
