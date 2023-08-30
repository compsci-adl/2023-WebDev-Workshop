import { NextResponse } from 'next/server';
import { COMMENTS } from '../comments';

/**
 * POST /api/comments/add_comment.
 *
 * @param {Request} req Request object.
 * @returns {Response} The API response.
 */
export async function POST(req) {
    const data = await req.json();
    COMMENTS.push({
        id: data.id,
        name: data.name,
        content: data.content,
        nLikes: 0,
    });
    return NextResponse.json({ status: 200 });
}
