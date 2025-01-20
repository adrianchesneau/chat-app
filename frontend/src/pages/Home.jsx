import React, { useEffect, useState } from 'react';

function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch('http://localhost:5000/api/users/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
        }
    }, []);

    return (
        <div>
            <h1>Bienvenue sur votre espace</h1>
            {user ? (
                <div>
                    <p>Nom d'utilisateur : {user.username}</p>
                    <p>Email : {user.email}</p>
                </div>
            ) : (
                <p>Chargement des informations...</p>
            )}
        </div>
    );
}

export default Home;
