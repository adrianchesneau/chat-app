import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './styles/App.css';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Messages from './pages/Messages.jsx';
import Profil from './pages/Profil.jsx';
import Research from './pages/Research.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx'; 
import Signup from './pages/Signup.jsx'; 

import ProtectedRoute from './routes/ProtectedRoute';

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
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: '', element: <Home /> },
          { path: 'research', element: <Research /> },
          { path: 'messages', element: <Messages /> },
          { path: 'profil', element: <Profil /> },
          { path: 'settings', element: <Settings /> },
        ],
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
