import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }
    updateState = (event) => {
        this.setState({input: event.target.value});
        setTimeout(this.sendValue, 100);
    }
    sendValue = () => {
        this.props.search(this.state);
    }
    render() {
        return (
            <input type='search' className="search-bar" placeholder="Search for a movie..." onChange={(event) => this.updateState(event)} value={this.state.input}/>
        )
    }
}

export default Search;

Search.propTypes = {
    search: PropTypes.func.isRequired
}