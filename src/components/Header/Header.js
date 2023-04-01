import React from "react";
import PropTypes from 'prop-types';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
          <div className='logo-wrapper'>
            <div className='title-wrapper'>
              <img src={require('../../images/tomatillo-wrapped.png')} alt='Picture of Tomatillo' className='tomatillo'/>
              <h1 className='title'>Rancid Tomatillos</h1>
            </div>
            {/* <NavLink to='/'>
                <button className="back-button">Go Back</button>
            </NavLink> */}
            <input type='search' className="search-bar" placeholder="Search for a movie..."/>
            <p className='tagline'>find your next worst movie...</p>
          </div>
        </header>
    )

}

export default Header;