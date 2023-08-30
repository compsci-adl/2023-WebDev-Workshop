/**
 * @type {HTMLFormElement | null}
 */
const form = document.querySelector('#submit-form');
const commentsSection = document.querySelector('#guestbook-comments');

/**
 * @type {{ id: string; name: string; content: string; nLikes: number; hasLiked: boolean; }[]}
 */
let comments = [];

window.addEventListener('load', async () => {
    const response = await fetch('/api/comments/get_comments');
    const data = await response.json();
    comments = data.map(({ id, name, content, nLikes }) => ({
        id,
        name,
        content,
        nLikes,
        hasLiked: false,
    }));
    displayMessages();
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const commentId = Date.now();
    const comment = {
        id: commentId,
        name: data.get('name'),
        content: data.get('content'),
        nLikes: 0,
        hasLiked: false,
    };

    comments.push(comment);

    await fetch('/api/comments/add_comment', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(comment),
    });

    form.reset();
    displayMessages();
});

function displayMessages() {
    commentsSection.replaceChildren();

    for (const [i, { name, content, nLikes }] of comments.entries()) {
        const commentElement = document.createElement('div');
        const nameElement = document.createElement('h3');
        const contentElement = document.createElement('p');
        const likesElement = document.createElement('button');

        commentElement.append(nameElement, contentElement, likesElement);
        commentElement.classList.add('guestbook-comment');

        nameElement.innerText = name;
        contentElement.innerText = content;
        likesElement.innerText = `${nLikes} likes`;

        likesElement.addEventListener('click', () => {
            comments[i].nLikes += comments[i].hasLiked ? -1 : 1;
            fetch('/api/comments/like_comment', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    commentId: comments[i].id,
                    type: comments[i].hasLiked ? 'dislike' : 'like',
                }),
            });
            comments[i].hasLiked = !comments[i].hasLiked;
            likesElement.innerText = `${comments[i].nLikes} likes`;
        });

        commentsSection.append(commentElement);
    }
}
