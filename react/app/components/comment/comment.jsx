import styles from './comment.module.css';
import { useState } from 'react';

export default function Comment({ comment }) {
    const [likes, setLikes] = useState(comment.nLikes);

    const updateLikes = () => {
        setLikes((comment.nLikes += comment.hasLiked ? -1 : 1));
        comment.hasLiked = !comment.hasLiked;
    };

    return (
        <div className={styles.guestbookComment}>
            <h3>{comment.name}</h3>
            <p className={styles.commentContent}>{comment.content}</p>
            <button onClick={updateLikes} className={styles.likeButton}>{`${likes} likes`}</button>
        </div>
    );
}
