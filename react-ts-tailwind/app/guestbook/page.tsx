'use client';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import Comment from '../../components/comment/comment';
import type { FormEvent } from 'react';
import type { CommentData } from '../../components/comment/comment';

export default function GuestBook() {
    /* TODO explain useState and how its different from the vanilla approach */
    const [comments, setComments] = useState<CommentData[]>([]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newComment = {
            /* Creating a unique id for each comment using nanoid.
                Normally this would be generated server-side by the database
                but it's here for demonstration purposes*/
            id: nanoid(),
            name: data.get('name')?.toString() ?? '',
            content: data.get('content')?.toString() ?? '',
            nLikes: 0,
        } satisfies CommentData;

        setComments([...comments, newComment]);
        event.currentTarget.reset();
    };

    return (
        <main>
            <h1 className="text-3xl text-neutral-200">{'Sign my guestbook ✍️'}</h1>

            <form id="submit-form" className="flex flex-col gap-4 pt-8" onSubmit={handleSubmit}>
                <label htmlFor="guestbook-name">{'Your name'}</label>
                <input
                    name="name"
                    className="-mt-2 w-[min(35rem,100%)] rounded-md border-none bg-neutral-800 px-4 py-2"
                    type="text"
                    maxLength={20}
                    required
                />
                <label htmlFor="guestbook-message">{'Message'}</label>
                <input
                    name="content"
                    className="-mt-2 w-[min(35rem,100%)] rounded-md border-none bg-neutral-800 px-4 py-2"
                    type="text"
                    maxLength={50}
                    required
                />
                <input
                    id="guestbook-button"
                    className="w-[min(10rem,100%)] cursor-pointer rounded-md border-none bg-neutral-700 px-4 py-2 opacity-50 transition-opacity duration-200 ease-linear hover:m-0 hover:opacity-80"
                    type="submit"
                    value="submit"
                />
            </form>

            <section id="guestbook-comments" className="flex flex-col gap-4 pt-8">
                {comments.map((currComment) => (
                    <Comment key={currComment.id} comment={currComment} />
                ))}
            </section>
        </main>
    );
}
