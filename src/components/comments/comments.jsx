import React from 'react';
import './comments.scss';
import { CommentsRender } from './commentsRender';

export const Comments = ({ comments }) => {
    const commentsNumber = comments?.length;
    const firstTenComments = comments?.slice(0, 10);

    if (commentsNumber === 0) {
        return <h1>No comments yet</h1>;
    }

    if (commentsNumber > 10) {
        return CommentsRender({ comments: firstTenComments });
    }

    return CommentsRender({ comments });
};
