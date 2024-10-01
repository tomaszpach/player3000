import React from 'react';

export const SortingButtons = ({
    sortByOrder,
    buttonsType,
    selectedSort,
    options,
}) => {
    const isActiveClass = (checkBy) =>
        checkBy === selectedSort ? 'active' : 'not-active';
    const firstOption = options[0];
    const secondOption = options[1];

    return (
        <div className={`sort-group ${buttonsType}`}>
            <button
                className={isActiveClass(firstOption)}
                onClick={() => sortByOrder(firstOption)}
            >
                {firstOption}
            </button>
            <button
                className={isActiveClass(secondOption)}
                onClick={() => sortByOrder(secondOption)}
            >
                {secondOption}
            </button>
        </div>
    );
};
