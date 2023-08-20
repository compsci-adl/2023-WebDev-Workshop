/**
 * @type {HTMLFormElement | null}
 */
const form = document.querySelector('#submit-form');
const commentsSection = document.querySelector('#guestbook-comments');

/**
 * @type {{ name: string; content: string; nLikes: number; hasLiked: boolean; }[]}
 */
const comments = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);

    comments.push({
        name: data.get('name'),
        content: data.get('content'),
        nLikes: 0,
        hasLiked: false,
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
            comments[i].hasLiked = !comments[i].hasLiked;
            likesElement.innerText = `${comments[i].nLikes} likes`;
        });

        commentsSection.append(commentElement);
    }
}