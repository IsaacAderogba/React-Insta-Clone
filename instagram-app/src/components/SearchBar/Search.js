import React from 'react';
import './SearchBar.css';

export default class Search extends React.Component {

    render() {
        return (
            <div className='Search'>
                <input type="text" placeholder="search" />
            </div>
        );
    }
}
