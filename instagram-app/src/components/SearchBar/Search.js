import React from 'react';
import './SearchBar.css';

export default class Search extends React.Component {



    render() {
        return (
            <div className='Search'>
                <input 
                value={this.props.searchInput} 
                type="text" 
                placeholder="search" 
                onChange={this.props.onSearchHandler}
                />
            </div>
        );
    }
}
