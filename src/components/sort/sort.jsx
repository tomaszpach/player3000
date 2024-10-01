import React from 'react';

// A toolbar that lets a user sort the list of clips by name or created date
export const Sort = ({ setSortBy }) => {
    const sortByOrder = (sortBy) => {
        switch (sortBy) {
            case 'newest':
                return setSortBy('-created_at');
            case 'oldest':
                return setSortBy('created_at');

            case 'name-asc':
                return setSortBy('name');
            case 'name-desc':
                return setSortBy('-name');

            case 'most-liked':
                return setSortBy('-likes');
            case 'least-liked':
                return setSortBy('likes');

            default:
                return setSortBy('-created_at');
        }
    };

    return (
        <div className="sort">
            <select
                onChange={(event) => setSortBy(event.target.value)}
                className="sort-select"
            >
                <option value="created_at">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="name">Most liked</option>
                <option value="least-liked">Least liked</option>
            </select>

            <div className="sort-by-date">
                <button onClick={() => sortByOrder('newest')}>newest</button>
                <button onClick={() => sortByOrder('oldest')}>oldest</button>
            </div>

            <div className="sort-by-name">
                <button onClick={() => sortByOrder('name-asc')}>name</button>
                <button onClick={() => sortByOrder('name-desc')}>-name</button>
            </div>

            <div className="sort-by-likes">
                <button onClick={() => sortByOrder('most-liked')}>
                    most liked
                </button>
                <button onClick={() => sortByOrder('least-liked')}>
                    least liked
                </button>
            </div>
        </div>
    );
};
