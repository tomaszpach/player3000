import React from 'react';
import { Logo } from './logo';
import './header.scss';
import { Title } from './title';
import { Link } from 'react-router-dom';
import { Logo2 } from './logo2';

export const Header = () => {
    return (
        <header id="header" className="section">
            <div className="logo-title">
                <Link to="/" className="logo-link">
                    {/*<Logo />*/}
                    <Logo2 />
                </Link>
                <Title />
            </div>
        </header>
    );
};
