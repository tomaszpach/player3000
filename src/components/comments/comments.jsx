import React from 'react';
import './comments.scss';

export const Comments = ({ comments }) => {
    console.log('ttt comments', comments);

    const timeAgo = (date) => {
        const now = new Date();
        const past = new Date(date);
        const seconds = Math.floor((now - past) / 1000);
        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1,
        };

        for (const [unit, value] of Object.entries(intervals)) {
            const count = Math.floor(seconds / value);
            if (count >= 1) {
                return count === 1 ? `a ${unit} ago` : `${count} ${unit}s ago`;
            }
        }

        return 'just now';
    };
    return (
        <div className="comments">
            <h1>Comments</h1>
            {comments?.map((comment) => (
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
            ))}
        </div>
    );
};
