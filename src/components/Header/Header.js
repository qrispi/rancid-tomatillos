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
            <Route path='/:movieId'>
                <NavLink to='/' className='back-navlink'>
                    <button className="back-button">Go Back</button>
                </NavLink>
                <p className='tagline move-down' >find your next worst movie...</p>
            </Route>
            <Route exact path='/'>
                <Search search={search}/>
                <p className='tagline move-up' >find your next worst movie...</p>
            </Route>
          </div>
        </header>
    )
}

export default Header;

Header.propTypes = {
  search: PropTypes.func.isRequired
}
