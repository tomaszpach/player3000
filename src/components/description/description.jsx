import React from 'react';
import './description.scss';

export const Description = ({ video }) => {
    return (
        <div className="description">
            <h3>Description</h3>

            {video?.description?.length > 0 ? (
                <p>{video?.description}</p>
            ) : (
                <p>No description</p>
            )}
        </div>
    );
};
