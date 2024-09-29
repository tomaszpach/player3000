import React from 'react';

export const Logo2 = () => {
    return (
        <img
            className="logo"
            src={process.env.PUBLIC_URL + '/logo.jpeg'}
            alt="logo"
        />
    );
};
