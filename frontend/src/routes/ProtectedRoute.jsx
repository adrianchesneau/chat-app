import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  
  // Récupérer le token initial
  const [initialToken] = useState(localStorage.getItem('token'));
  const [token, setToken] = useState(initialToken);

  useEffect(() => {
    // Fonction de mise à jour du token lors du changement dans localStorage
    const handleStorageChange = () => {
      const newToken = localStorage.getItem('token');
      setToken(newToken);

      // Si le token a changé ou est supprimé, rediriger vers login
      if (newToken !== initialToken) {
        navigate('/login', { replace: true });
      }
    };

    // Ajouter l'écouteur d'événements
    window.addEventListener('storage', handleStorageChange);

    // Vérification immédiate au montage (ex: après un reload)
    if (!initialToken) {
      navigate('/login', { replace: true });
    }

    // Nettoyer l'écouteur d'événements lors du démontage
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate, initialToken]);

  return token ? element : null;
};

export default ProtectedRoute;
