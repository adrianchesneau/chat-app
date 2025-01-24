import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import '../styles/Header.css';
import logo from '../assets/chat_app_logo.png';
import 'boxicons';

function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); 
  };

  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" alt="logo chat app" src={logo} />
      </div>

      <nav>
        <div className="main_nav">
          <NavLink className="button" to="/" activeclassname="active">
            <box-icon name="home" type="solid" color="white" />
            <span>Home</span>
          </NavLink>
          <NavLink className="button" to="/research" activeclassname="active">
            <box-icon name="search" type="regular" color="white" />
            <span>Research</span>
          </NavLink>
          <NavLink className="button" to="/messages" activeclassname="active">
            <box-icon name="send" type="solid" color="white" />
            <span>Messages</span>
          </NavLink>
          <NavLink className="button" to={`/${user?.username}`} activeclassname="active">
            <box-icon name="user" type="solid" color="white" />
            <span>Profil</span>
          </NavLink>
        </div>
        <div className="main_nav">
          <NavLink className="button" to="/settings" activeclassname="active">
            <box-icon name="cog" type="solid" color="white" />
            <span>Settings</span>
          </NavLink>
          <button onClick={handleLogout} className="button">
            <box-icon color="white" name="log-out"></box-icon>
            <span>Déconnexion</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
