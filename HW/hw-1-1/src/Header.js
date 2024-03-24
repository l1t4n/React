import React from 'react';
import { Button } from './Button';

export const Header = props => {
    return (
    <header className='header'>
        <input></input>
        <nav>{props.nav.map(el => el)}</nav>
        <Button className='login-btn'>login</Button>
    </header>
    )
};