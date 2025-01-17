import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom';
import '../styles/Header.css';


function Header () {
    return(
        <>
        <header>
            <nav>
                <div>
                <NavLink to ="/">home </NavLink>
                <NavLink to ="/research">research </NavLink>
                <NavLink to ="/messages">messages </NavLink>
                <NavLink to ="/profil">profil </NavLink>
                </div>
                <NavLink to ="/settings">settings </NavLink>
            </nav>
        </header>
        <div>
            <Outlet/>
        </div>
        </>
    )
}

export default Header;