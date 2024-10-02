import React from 'react';
import { SORTING_OPTIONS_NAMES } from '../../consts/consts';

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
                {SORTING_OPTIONS_NAMES[firstOption]}
            </button>
            <button
                className={isActiveClass(secondOption)}
                onClick={() => sortByOrder(secondOption)}
            >
                {SORTING_OPTIONS_NAMES[secondOption]}
            </button>
        </div>
    );
};
