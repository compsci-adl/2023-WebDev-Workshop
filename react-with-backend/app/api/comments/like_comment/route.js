import { NextResponse } from 'next/server';
import { COMMENTS } from '../comments';

/**
 * POST /api/comments/like_comment.
 *
 * @param {Request} req Request object.
 * @returns {Response} The API response.
 */
export async function POST(req) {
    const data = await req.json();
    const comment = COMMENTS.find(({ id }) => id === data.commentId);
    if (comment) {
        comment.nLikes += data.type === 'like' ? 1 : -1;
        return NextResponse.json({ status: 200 });
    }
    return NextResponse.json({ status: 500 });
}
