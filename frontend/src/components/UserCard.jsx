import React from 'react';
import '../styles/UserCard.css';

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className='UserCard'>
      <div className="image-cropper">
        <img
          src={user.profile_picture ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlFj3rCkvN11OtKaVHC5xmmnDxcHUH4VHNQ&s"}
          className="rounded"
          alt={user.username || "Utilisateur"}
        />
      </div>
      <div className='cardInfo'>
        <span className='pseudo'>{user.username}</span>
        <div>
          <span className='gris'>message</span>
          <span className='gris'> • 4min</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
