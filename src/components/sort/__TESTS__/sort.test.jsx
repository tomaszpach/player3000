import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SORTING_OPTIONS, SORTING_VALUES } from '../../../consts/consts';
import { Sort } from '../sort';

describe('Sort Component', () => {
    let setSortByMock;

    beforeEach(() => {
        setSortByMock = jest.fn();
    });

    test('renders sort component with buttons', () => {
        render(<Sort setSortBy={setSortByMock} />);

        const sortByDateButton = screen.getByRole('button', {
            name: SORTING_VALUES.newest,
        });
        const sortByNameButton = screen.getByRole('button', {
            name: SORTING_VALUES.nameAsc,
        });
        const sortByLikesButton = screen.getByRole('button', {
            name: SORTING_VALUES.mostLiked,
        });

        expect(sortByDateButton).toBeInTheDocument();
        expect(sortByNameButton).toBeInTheDocument();
        expect(sortByLikesButton).toBeInTheDocument();
    });

    test('updates sort by value when button clicked', () => {
        render(<Sort setSortBy={setSortByMock} />);

        const sortByDateButton = screen.getByRole('button', {
            name: SORTING_VALUES.oldest,
        });

        fireEvent.click(sortByDateButton);

        expect(setSortByMock).toHaveBeenCalledWith(SORTING_OPTIONS.oldest);
    });

    test('maintains selected sort value', () => {
        render(<Sort setSortBy={setSortByMock} />);

        const sortByDateButton = screen.getByRole('button', {
            name: SORTING_VALUES.newest,
        });

        fireEvent.click(sortByDateButton);

        expect(sortByDateButton).toHaveClass('active');
    });
});
