import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CommentsRender } from '../commentsRender';

jest.mock('../../../helpers/dates');

describe('CommentsRender Component', () => {
    test('renders the comments section with title', () => {
        render(<CommentsRender comments={[]} />);

        const titleElement = screen.getByText('Comments');

        expect(titleElement).toBeInTheDocument();
    });

    test('renders a single comment with correct data', () => {
        const comments = [
            {
                id: 1,
                author: 'user1',
                likes: 5,
                comment: 'This is a comment',
            },
        ];

        render(<CommentsRender comments={comments} />);

        const authorElement = screen.getByText('@user1');
        const likesElement = screen.getByText('5 likes');
        const commentElement = screen.getByText('This is a comment');

        expect(authorElement).toBeInTheDocument();
        expect(likesElement).toBeInTheDocument();
        expect(commentElement).toBeInTheDocument();
    });

    test('renders multiple comments', () => {
        const comments = [
            {
                id: 1,
                author: 'user1',
                dateAdded: '2023-10-01T12:00:00Z',
                likes: 5,
                comment: 'This is a comment',
            },
            {
                id: 2,
                author: 'user2',
                dateAdded: '2023-10-02T12:00:00Z',
                likes: 10,
                comment: 'This is another comment',
            },
        ];
        render(<CommentsRender comments={comments} />);

        const authorElements = screen.getAllByText(/@user/);
        const likesElements = screen.getAllByText(/likes/);
        const commentElements = screen.getAllByText(/This is/);

        expect(authorElements.length).toBe(2);
        expect(likesElements.length).toBe(2);
        expect(commentElements.length).toBe(2);
    });

    test('renders correctly when comments prop is undefined', () => {
        render(<CommentsRender />);

        const titleElement = screen.getByText('Comments');

        expect(titleElement).toBeInTheDocument();
    });
});
