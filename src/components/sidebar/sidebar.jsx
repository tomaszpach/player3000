import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

export const Sidebar = () => {
    return (
        <div id="sidebar" className="section">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
