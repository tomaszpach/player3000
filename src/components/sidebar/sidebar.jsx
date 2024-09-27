import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

export const Sidebar = () => {
    return (
        <div id="sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to={`contacts/2`}>Your Friend</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
