import React, { useState, useEffect } from 'react';
import '../styles/MsgScrollbar.css';
import UserCard from './UserCard';

const MsgScrollbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setUsers([]);
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/search?query=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) throw new Error('Erreur de recherche');

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Erreur lors de la recherche des utilisateurs:', error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchUsers();
    }, 300); 

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="MsgScrollbarContainer">
      <input
        className="searchBar"
        type="text"
        placeholder="Rechercher un utilisateur..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="cardDisposal">
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>Aucun utilisateur trouvé</p>
        )}
      </div>
    </div>
  );
};

export default MsgScrollbar;
