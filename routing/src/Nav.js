import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
const navstyle = {
    color: 'white'
};

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link  style={navstyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link  style={navstyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navstyle} to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
