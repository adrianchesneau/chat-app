import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/ResearchUserCard.css';

const ResearchUserCard = ({ user }) => {
  return (
    <NavLink 
      to={`/${user.username}`} 
      className="ResearchUserCard"
    >
      <div className="image-cropper">
        <img 
          src={user.profile_picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlFj3rCkvN11OtKaVHC5xmmnDxcHUH4VHNQ&s"} 
          className="rounded" 
          alt={`Profil de ${user.username}`} 
        />
      </div>

      <div className="cardInfo">
        <span className="pseudo">{user.username}</span>
        <div>
          <span className="gris"> • suivi</span>
        </div>
      </div>
    </NavLink>
  );
};

export default ResearchUserCard;
