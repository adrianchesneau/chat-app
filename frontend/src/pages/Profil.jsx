import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import '../styles/Profil.css';

function Profil() {
  const { username } = useParams();
  const { user: loggedInUser } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:5000/api/users/${username}`);
        
        if (!response.ok) {
          throw new Error('Utilisateur non trouvé');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [username]);

  if (loading) return <p>Chargement du profil...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur: {error}</p>;

  const isMyProfile = loggedInUser && loggedInUser.username === user.username;

  return (
    <div className="profil-container">
      <h1>Profil de {user.username}</h1>
      <p>Email: {user.email}</p>
      <img
        src={user.profile_picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlFj3rCkvN11OtKaVHC5xmmnDxcHUH4VHNQ&s"}
        alt={`Profil de ${user.username}`}
        className="profile-pic"
      />

      <div>
        <p><strong>Membre depuis :</strong> {new Date(user.created_at).toLocaleDateString()}</p>
        <p><strong>Bio :</strong> {user.bio || 'Aucune biographie renseignée.'}</p>
      </div>

      {!isMyProfile && (
        <button
          className="message-btn"
          onClick={() => navigate(`/messages?to=${user.username}`)}
        >
          Envoyer un message
        </button>
      )}
    </div>
  );
}

export default Profil;
