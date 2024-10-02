import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Title } from '../title';

describe('Title Component', () => {
    test('renders the title with correct text', () => {
        render(<Title />);

        const titleElement = screen.getByText('Player3000');

        expect(titleElement).toBeInTheDocument();
    });

    test('has the correct class name', () => {
        render(<Title />);

        const titleElement = screen.getByText('Player3000');

        expect(titleElement).toHaveClass('title');
    });
});
