import React from 'react';
import './comments.scss';
import { timeAgo } from '../../helpers/dates';

export const CommentsRender = ({ comments }) => {
    return comments?.map((comment) => (
        <div className="single-comment" key={comment.id}>
            <div className="author-dateAdded">
                <h4 className="author">@{comment.author}</h4>

                <p
                    className="dateAdded"
                    title={'Comment added: ' + comment.dateAdded}
                >
                    {timeAgo(comment.dateAdded)}
                </p>
                <p className="likes">{comment.likes} likes</p>
            </div>

            <p className="comment">{comment.comment}</p>
        </div>
    ));
};
