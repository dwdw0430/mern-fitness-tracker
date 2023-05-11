import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Navbar() {

    return(
        <nav className = "navbar">
            <Link to="/" className="navbar-title">Fitness-Tracker</Link>
            <ul className="navbar">
                <li>
                    <Link to="/">Exercises</Link>
                </li>
                <li>
                    <Link to="/create">Create Log</Link>
                </li>
                <li>
                    <Link to="/user">Create User</Link>
                </li>
            </ul>
        </nav>
    );
}