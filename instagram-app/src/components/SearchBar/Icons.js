import React from 'react';
import './SearchBar.css';

export default class Icons extends React.Component {

    render() {
        return (
            <div className='Search'>
                <i class="large material-icons">explore</i>
                <i class="large material-icons">favorite_border</i>
                <i class="large material-icons">person_outline</i>
            </div>
        );
    }
}
