/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/naming-convention */
'use server';

import { zact } from 'zact/server';
import { z } from 'zod';

const COMMENT_DATA = z.object({
    id: z.string(),
    name: z.string(),
    content: z.string(),
    nLikes: z.number(),
});
export type CommentData = z.infer<typeof COMMENT_DATA>;

const COMMENTS: CommentData[] = [];

export const addComment = zact(COMMENT_DATA)(async ({ id, name, content }) => {
    COMMENTS.push({
        id,
        name,
        content,
        nLikes: 0,
    });
});

export const getComments = zact()(async () => {
    return COMMENTS;
});

export const likeComment = zact(
    z.object({
        commentId: z.string(),
        type: z.union([z.literal('like'), z.literal('dislike')]),
    })
)(async ({ commentId, type }) => {
    const comment = COMMENTS.find(({ id }) => id === commentId);
    if (comment) comment.nLikes += type === 'like' ? 1 : -1;
});
