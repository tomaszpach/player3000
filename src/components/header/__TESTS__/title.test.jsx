import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '../title';

describe('Title Component', () => {
    test('renders the title with correct text', () => {
        render(<Title />);

        const titleElement = screen.getByText('Bakuś Player Premium');

        expect(titleElement).toBeInTheDocument();
    });

    test('has the correct class name', () => {
        render(<Title />);

        const titleElement = screen.getByText('Bakuś Player Premium');

        expect(titleElement).toHaveClass('title');
    });
});
