import { useState } from 'react';
import styles from './comment.module.css';

export default function Comment({ comment }) {
    const [likes, setLikes] = useState(comment.nLikes);
    const [hasLiked, setHasLiked] = useState(false);

    const updateLikes = () => {
        // setLikes((comment.nLikes += hasLiked ? -1 : 1));
        setLikes((nLikes) => nLikes + (hasLiked ? -1 : 1));
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
