import React from 'react';
import './comments.scss';
import { CommentsRender } from './commentsRender';

export const Comments = ({ comments }) => {
    const commentsAmount = comments?.length;

    return (
        <div className="comments">
            <h3 className="title">Comments</h3>

            {!comments || commentsAmount === 0 ? (
                <h3>No comments yet</h3>
            ) : (
                <CommentsRender comments={comments} />
            )}
        </div>
    );
};
