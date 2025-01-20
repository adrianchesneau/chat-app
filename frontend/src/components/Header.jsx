import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/chat_app_logo.png';
import 'boxicons';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');  // Redirige vers la page de connexion
  };

  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" alt="logo chat app" src={logo} />
      </div>

      <nav>
        <div className="main_nav">
          <NavLink className="button" to="/" activeClassName="active">
            <box-icon name="home" type="solid" color="white" />
            <span>Home</span>
          </NavLink>
          <NavLink className="button" to="/research" activeClassName="active">
            <box-icon name="search" type="regular" color="white" />
            <span>Research</span>
          </NavLink>
          <NavLink className="button" to="/messages" activeClassName="active">
            <box-icon name="send" type="solid" color="white" />
            <span>Messages</span>
          </NavLink>
          <NavLink className="button" to="/profil" activeClassName="active">
            <box-icon name="user" type="solid" color="white" />
            <span>Profil</span>
          </NavLink>
        </div>
        <div className="main_nav">
          <NavLink className="button" to="/settings" activeClassName="active">
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
