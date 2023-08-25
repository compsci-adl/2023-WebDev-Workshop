import { useState } from 'react';

export type CommentProps = {
    comment: {
        id: string;
        name: string | FormDataEntryValue | null;
        content: string | FormDataEntryValue | null;
        nLikes: number;
        hasLiked: boolean;
    };
};

export default function Comment({ comment }: CommentProps) {
    const [likes, setLikes] = useState(comment.nLikes);

    const updateLikes = () => {
        setLikes((comment.nLikes += comment.hasLiked ? -1 : 1));
        comment.hasLiked = !comment.hasLiked;
    };

    return (
        <div className="flex flex-row items-center gap-4 font-light">
            <h3>{comment.name as string}</h3>
            <p className="text-neutral-200">{comment.content as string}</p>
            <button
                onClick={updateLikes}
                className="cursor-pointer rounded-md border-none bg-neutral-800 px-2 py-1 text-xs outline outline-1 outline-neutral-700"
            >{`${likes} likes`}</button>
        </div>
    );
}
