/**
 * @type {HTMLFormElement | null}
 */
const form = document.querySelector('#submit-form');
const commentsSection = document.querySelector('#guestbook-comments');

/**
 * @type {{ name: string; content: string; nLikes: number; hasLiked: boolean; }[]}
 */
let comments = [];

window.onload = async () => {
    try {
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
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const commentId = Date.now();

    comments.push({
        id: commentId,
        name: data.get('name'),
        content: data.get('content'),
        nLikes: 0,
        hasLiked: false,
    });

    try {
        const response = await fetch('/api/comments/add_comment', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                id: commentId,
                name: data.get('name'),
                content: data.get('content'),
            }),
        });

        console.log(response);
        form.reset();
        displayMessages();
    } catch (error) {
        console.error(error);
    }
});

function displayMessages() {
    commentsSection.replaceChildren();
    console.log(comments);
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
            comments[i].hasLiked = !comments[i].hasLiked;
            fetch('/api/comments/like_comment?id=' + comments[i].id, {
                method: 'POST',
            });
            likesElement.innerText = `${comments[i].nLikes} likes`;
        });

        commentsSection.append(commentElement);
    }
}
