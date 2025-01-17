import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Messages from './pages/Messages.jsx'
import Profil from './pages/Profil.jsx'
import Research from './pages/Research.jsx'
import Settings from './pages/Settings.jsx'


const router = createBrowserRouter([
      {
            path:   '/' ,
            element:   
                <Header/>
            ,
            
            children : [
                {
                    path:   '',
                    element:    <Home/>
                },
                {
                    path:   'research',
                    element:    <Home/>
                },
                {
                    path:   'messages',
                    element:    <Home/>
                },
                {
                    path:   'profil',
                    element:    <Home/>
                },
                {
                    path:   'settings',
                    element:    <Home/>
                }
            ]
    }
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
