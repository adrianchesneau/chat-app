import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../styles/Messages.css';
import 'boxicons';

const ConversationHeader = () => {
  const [searchParams] = useSearchParams();  
  const username = searchParams.get('to');  // Récupérer le paramètre `to` depuis l'URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!username) return;

      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/users/${username}`);
        if (!response.ok) {
          throw new Error('Utilisateur non trouvé');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  const handleCardClick = () => {
    navigate(`/${user?.username}`);
  };

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!user) {
    return <p>Utilisateur introuvable.</p>;
  }

  return (
    <div className="conversationHeader" >
      <div className='linkProfil' onClick={handleCardClick}>
        <div className="image-cropper">
            <img 
                src={user.profile_picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlFj3rCkvN11OtKaVHC5xmmnDxcHUH4VHNQ&s"} 
                className="rounded" 
                alt={`Profil de ${user.username}`} 
            />
            </div>
            <h4>{user.username}</h4>
        </div>
        <div className='logoContainer'>
            <div className="logoConvoHeader">
                <box-icon name='phone' color="white"></box-icon>
            </div>
            <div className="logoConvoHeader">
                <box-icon name='camera-movie' color="white"></box-icon>
            </div>
            <div className="logoConvoHeader">
                <box-icon name='info-circle' color="white"></box-icon>
            </div>
        </div>
    </div>
  );
};

export default ConversationHeader;
