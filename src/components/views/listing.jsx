import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { responsePlease } from '../../API/fetch/fetch';
import './listing.scss';

export const Listing = () => {
    const [videList, setVideList] = React.useState(null);

    useEffect(() => {
        responsePlease().then((data) => {
            setVideList(data);
        });
    }, []);

    return (
        <div id="listing">
            <div className="videos">
                {videList ? (
                    videList.map((item) => {
                        return (
                            <Link to={`video/${item.id}`} key={item.id}>
                                <div className="video-item">
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                    />
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};
