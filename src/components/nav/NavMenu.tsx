import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../App.scss';
import './NavMenu.scss';

function NavMenu() {
  return (
    <nav id='nav-container'>
        <Link className='nav-link' to="/trends">Trends</Link>
        <Link className='nav-link' to="/all-cases">All</Link>
        <Link className='nav-link' to="/add-case">Add</Link>
        <Link className='nav-link' to='/login'>Logout</Link>
    </nav>
  );
}

export default NavMenu;