const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

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
    console.log(req.query.id);
    console.log(comments);
    const comment = comments.find((comment) => comment.id === Number(req.query.id));
    console.log(comment);
    if (comment) {
        comment.nLikes++;
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});
