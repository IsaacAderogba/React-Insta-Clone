import React from 'react';
import Logo from './Logo'
import Search from './Search';
import Icons from './Icons';
import './SearchBar.css';

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className='SearchBar'>
                <Logo />
                <Search />
                <Icons />
            </div>
        );
    }
}