import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = process.env.PORT || 8080;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @type {{ id: string; name: string; content: string; nLikes: number }[]}
 */
const comments = [];

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.get('/guestbook', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/guestbook.html'));
});

app.post('/api/comments/add_comment', (req, res) => {
    comments.push({
        id: req.body.id,
        name: req.body.name,
        content: req.body.content,
        nLikes: 0,
    });
    res.sendStatus(200);
});

app.get('/api/comments/get_comments', (req, res) => {
    res.send(JSON.stringify(comments));
});

app.post('/api/comments/like_comment', (req, res) => {
    const comment = comments.find((c) => c.id === Number(req.body.commentId));
    if (comment) {
        comment.nLikes += req.body.type === 'like' ? 1 : -1;
        res.sendStatus(200);
    } else res.sendStatus(500);
});

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});
