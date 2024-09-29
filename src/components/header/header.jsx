import React from 'react';
import { Logo } from './logo';
import './header.scss';
import { Title } from './title';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header id="header" className="section">
            <div className="logo-title">
                <Link to="/" className="logo-link">
                    <Logo />
                </Link>
                <Title />
            </div>
        </header>
    );
};
