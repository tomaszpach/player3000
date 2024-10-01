import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Logo } from '../logo';

describe('Logo Component', () => {
    test('renders the logo image with correct src and alt attributes', () => {
        render(<Logo />);

        const logoImage = screen.getByAltText('logo');

        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveAttribute('src', '/logo.jpeg');
    });

    test('has the correct class name', () => {
        render(<Logo />);

        const logoImage = screen.getByAltText('logo');

        expect(logoImage).toHaveClass('logo');
    });
});
