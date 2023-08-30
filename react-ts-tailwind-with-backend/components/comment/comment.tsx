import { useState } from 'react';
import { likeComment } from '@/server/actions';
import type { CommentData } from '@/server/actions';

export type CommentProps = {
    comment: CommentData;
};

export default function Comment({ comment }: CommentProps) {
    const [likes, setLikes] = useState(comment.nLikes);
    const [liked, setLiked] = useState(false);

    const updateLikes = () => {
        setLikes((nLikes) => nLikes + (liked ? -1 : 1));
        setLiked((hasLiked) => !hasLiked);
        void likeComment({ commentId: comment.id, type: liked ? 'dislike' : 'like' });
    };

    return (
        <div className="flex flex-row items-center gap-4 font-light">
            <h3>{comment.name}</h3>
            <p className="text-neutral-200">{comment.content}</p>
            <button
                type="button"
                onClick={updateLikes}
                className="cursor-pointer rounded-md border-none bg-neutral-800 px-2 py-1 text-xs outline outline-1 outline-neutral-700"
            >{`${likes} likes`}</button>
        </div>
    );
}
