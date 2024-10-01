import React from 'react';
import './sort.scss';
import { SORTING_OPTIONS, SORTING_VALUES } from '../../consts/consts';
import { SortingButtons } from './sortingButtons';

export const Sort = ({ setSortBy }) => {
    const [sortByValue, setSortByValue] = React.useState('newest');

    const sortByOrder = (sortBy) => {
        setSortByValue(sortBy);

        setSortBy(SORTING_OPTIONS[sortBy]);
    };

    return (
        <div className="sort">
            <SortingButtons
                buttonsType="sort-by-date"
                selectedSort={sortByValue}
                options={[SORTING_VALUES.newest, SORTING_VALUES.oldest]}
                sortByOrder={sortByOrder}
            />

            <SortingButtons
                buttonsType="sort-by-name"
                selectedSort={sortByValue}
                options={[SORTING_VALUES.nameAsc, SORTING_VALUES.nameDesc]}
                sortByOrder={sortByOrder}
            />

            <SortingButtons
                buttonsType="sort-by-likes"
                selectedSort={sortByValue}
                options={[SORTING_VALUES.mostLiked, SORTING_VALUES.leastLiked]}
                sortByOrder={sortByOrder}
            />
        </div>
    );
};
