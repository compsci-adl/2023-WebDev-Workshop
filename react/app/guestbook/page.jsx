'use client';

import styles from './page.module.css';
import { v4 } from 'uuid';
import { useState, useCallback } from 'react';

export default function GuestBook() {
    /* TODO explain useState and how its different from the vanilla approach */
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    /* Maybe explain why useCallback is used to prevent unnecessary re-renders? */
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();

            const newComment = {
                id: v4(),
                name,
                content,
                nLikes: 0,
                hasLiked: false,
            };

            setComments([...comments, newComment]);
            setName('');
            setContent('');
        },
        [comments, name, content]
    );

    const updateName = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const updateContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);

    const updateLikes = (index) => {
        const updatedComments = [...comments];
        updatedComments[index].nLikes += updatedComments[index].hasLiked ? -1 : 1;
        updatedComments[index].hasLiked = !updatedComments[index].hasLiked;
        setComments(updatedComments);
    };

    return (
        <>
            <main>
                <h1 className={styles.guestbookTitle}>Sign my guestbook ✍️</h1>

                <form id="submit-form" className={styles.inputs} onSubmit={handleSubmit}>
                    <label htmlFor="guestbook-name">Your name</label>
                    <input
                        name="name"
                        className={styles.guestbookInput}
                        type="text"
                        maxLength="20"
                        required
                        value={name}
                        onChange={updateName}
                    />
                    <label htmlFor="guestbook-message">Message</label>
                    <input
                        name="content"
                        className={styles.guestbookInput}
                        type="text"
                        maxLength="50"
                        required
                        value={content}
                        onChange={updateContent}
                    />
                    <input
                        id="guestbook-button"
                        className={styles.guestbookButton}
                        type="submit"
                        value="submit"
                    />
                </form>

                <section id="guestbook-comments" className={styles.guestbookComments}>
                    {comments.map((comment, index) => (
                        <div key={comment.id} className={styles.guestbookComment}>
                            <h3>{comment.name}</h3>
                            <p className={styles.commentContent}>{comment.content}</p>
                            <button
                                onClick={() => updateLikes(index)}
                                className={styles.likeButton}
                            >
                                {`${comment.nLikes} likes`}
                            </button>
                        </div>
                    ))}
                </section>
            </main>
            <footer></footer>
        </>
    );
}
