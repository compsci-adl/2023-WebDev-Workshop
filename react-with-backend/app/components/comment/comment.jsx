/* eslint-env browser */
import { useState } from 'react';
import styles from './comment.module.css';

export default function Comment({ comment }) {
    const [likes, setLikes] = useState(comment.nLikes);
    const [hasLiked, setHasLiked] = useState(false);

    const updateLikes = () => {
        // setLikes((comment.nLikes += hasLiked ? -1 : 1));
        setLikes((nLikes) => nLikes + (hasLiked ? -1 : 1));

        fetch('/api/comments/like_comment', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                commentId: comment.id,
                type: hasLiked ? 'dislike' : 'like',
            }),
        });

        // NOTE, THIS WILL NOT UPDATE THE VALUE UNTIL THE NEXT RENDER, EXPLAIN flushSync
        // setHasLiked(!hasLiked);
        setHasLiked((liked) => !liked);
    };

    return (
        <div className={styles.guestbookComment}>
            <h3>{comment.name}</h3>
            <p className={styles.commentContent}>{comment.content}</p>
            <button
                type="button"
                onClick={updateLikes}
                className={styles.likeButton}
            >{`${likes} likes`}</button>
        </div>
    );
}
