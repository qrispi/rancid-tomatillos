import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <input type='search' className="search-bar" placeholder="Search for a movie..."/>
        )
    }
}

export default Search