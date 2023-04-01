import React from "react";
import PropTypes from 'prop-types';
import "./Header.css";
import Search from "../Search/Search";
import { Route, NavLink } from 'react-router-dom';

const Header = ({search}) => {
    return (
        <header>
          <div className='logo-wrapper'>
            <div className='title-wrapper'>
              <img src={require('../../images/tomatillo-wrapped.png')} alt='Picture of Tomatillo' className='tomatillo'/>
              <h1 className='title'>Rancid Tomatillos</h1>
            </div>
            <NavLink to='/' className='back-navlink'>
                <Route path='/:movieId'>
                    <button className="back-button">Go Back</button>
                </Route>
            </NavLink>
            <Route exact path='/'>
                <Search search={search}/>
            </Route>
            <p className='tagline'>find your next worst movie...</p>
          </div>
        </header>
    )

}

export default Header;