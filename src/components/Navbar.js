import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return(
        <nav className = "nav">
            <Link to="/">Fitness-Tracker</Link>
            <ul>
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