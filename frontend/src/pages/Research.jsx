import React, { useState, useEffect } from 'react';
import UserCard from '../components/ResearchUserCard';
import { getUserProfile } from '../api/userService';

const Research = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            getUserProfile(token)
                .then(data => {
                    setUser(data);
                })
                .catch(error => console.error('Erreur lors de la récupération du profil:', error));
        }
    }, []); 

    useEffect(() => {
        if (!user || searchQuery.trim() === '') {
            setUsers([]);
            return;
        }

        const delay = setTimeout(() => {
            fetch(`http://localhost:5000/api/users/search?query=${encodeURIComponent(searchQuery)}&userId=${user.id}`)
                .then(response => response.json())
                .then(data => setUsers(data))
                .catch(error => console.error('Erreur lors de la recherche:', error));
        }, 100);

        return () => clearTimeout(delay);
    }, [searchQuery, user]);

    return (
        <div className="ResearchContainer">
            <input
                className='searchBar'
                type="text"
                placeholder="Search.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className='cardDisposal'>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default Research;
