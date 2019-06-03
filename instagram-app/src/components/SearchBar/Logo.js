import React from 'react';
import logoIcon from './logo-icon.png';
import logoText from './logo-text.png';

import './SearchBar.css';

export default class Logo extends React.Component {
    render() {
        return (
            <div className='logo'>
                <div className='logo-icon'>
                    <img src={`${logoIcon}`} alt='Instagram Logo Icon'/>
                </div>
                <div className='logo-text'>
                    <img src={`${logoText}`} alt='Instagram Logo Text'/>
                </div>
            </div>
        );
    }
}