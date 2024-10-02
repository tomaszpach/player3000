import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Description } from '../description';

describe('Description Component', () => {
    const videoWithDescription = {
        description: 'This is a test description.',
    };
    const videoWithoutDescription = '';

    it('renders correcly component', () => {
        render(<Description video={videoWithDescription} />);

        expect(screen.getByText('Description')).toBeInTheDocument();
        expect(
            screen.getByText('This is a test description.')
        ).toBeInTheDocument();
    });

    it('renders empty description when video is an empty object', () => {
        render(<Description video={videoWithoutDescription} />);

        expect(screen.getByText('Description')).toBeInTheDocument();
        expect(screen.getByText('No description')).toBeInTheDocument();
    });
});
