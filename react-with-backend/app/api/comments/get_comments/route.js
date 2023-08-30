import { NextResponse } from 'next/server';
import { COMMENTS } from '../comments';

/**
 * GET /api/comments/get_comments.
 *
 * @returns {NextResponse} The comments.
 */
export async function GET() {
    return NextResponse.json(COMMENTS);
}
