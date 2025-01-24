// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserProfile } from '../api/userService';  // Assurez-vous que le chemin est correct
import { loginUser } from '../api/auth';  // Assurez-vous que le chemin est correct

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const profile = await getUserProfile(token);  // Utilisation de la fonction getUserProfile
        if (profile) {
          setUser(profile);  // Sauvegarder l'utilisateur dans le state
        }
      }
    };

    fetchUser();
  }, []);  // Se déclenche uniquement une fois au chargement initial

  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      setUser(data.user);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user,login,logout }}>
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
