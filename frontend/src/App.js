import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import './styles/App.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Messages from './pages/Messages.jsx';
import Profil from './pages/Profil.jsx';
import Research from './pages/Research.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { useEffect,useState } from 'react';

// Composant pour gérer les routes protégées


// Layout principal avec Header et Outlet
const MainLayout = () => {
  return (
    <div className="site">
      <Header />
      <main className="Content">
        <Outlet />
      </main>
    </div>
  );
};

// Définition des routes
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <ProtectedRoute element={<MainLayout />} />, // Protéger cette route
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'research',
        element: <Research />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: ':username',
        element: <Profil />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
