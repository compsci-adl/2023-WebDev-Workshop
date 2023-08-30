/* eslint-env browser */
'use client';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import Comment from '../../components/comment/comment.jsx';
import styles from './page.module.css';

export default function GuestBook() {
    /* TODO explain useState and how its different from the vanilla approach */
    const [comments, setComments] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newComment = {
            /* Creating a unique id for each comment using nanoid.
            Normally this would be generated server-side by the database
            but it's here for demonstration purposes*/
            id: nanoid(),
            name: data.get('name'),
            content: data.get('content'),
            nLikes: 0,
        };

        setComments([...comments, newComment]);
        event.target.reset();
    };

    return (
        <main>
            <h1 className={styles.guestbookTitle}>{'Sign my guestbook ✍️'}</h1>

            <form id="submit-form" className={styles.inputs} onSubmit={handleSubmit}>
                <label htmlFor="guestbook-name">{'Your name'}</label>
                <input
                    name="name"
                    className={styles.guestbookInput}
                    type="text"
                    maxLength="20"
                    required
                />
                <label htmlFor="guestbook-message">{'Message'}</label>
                <input
                    name="content"
                    className={styles.guestbookInput}
                    type="text"
                    maxLength="50"
                    required
                />
                <input
                    id="guestbook-button"
                    className={styles.guestbookButton}
                    type="submit"
                    value="submit"
                />
            </form>

            <section id="guestbook-comments" className={styles.guestbookComments}>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </section>
        </main>
    );
}
