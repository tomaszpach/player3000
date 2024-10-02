import React from 'react';
import './comments.scss';
import { CommentsRender } from './commentsRender';

export const Comments = ({ comments }) => {
    const commentsAmount = comments?.length;

    return (
        <div className="comments">
            <h2 className="title">Comments</h2>
            {!comments || commentsAmount === 0 ? (
                <h2>No comments yet</h2>
            ) : (
                <CommentsRender comments={comments} />
            )}
        </div>
    );
};
