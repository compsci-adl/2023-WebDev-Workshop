import express from 'express';
import path from 'path';
import {createDB, createComment, getComments, likeComment} from './database/db.js';

const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 8080;

createDB();
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.get('/guestbook', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/guestbook.html'));
});

app.post('/api/comments/add_comment', (req, res) => {
    createComment(req.body.name, req.body.content, (err) => {
        if (err) {
            res.status(500).send('Error creating comment');
        } else {
            res.sendStatus(200);
        }
    });
});

app.get('/api/comments/get_comments', (req, res) => {
    getComments((comments, err) => {
        if (err) {
            res.status(500).send('Error retrieving comments');
        } else {
            res.send(JSON.stringify(comments));
        }
    });
});

app.post('/api/comments/like_comment', (req, res) => {
    likeComment(req.query.id, (err) => {
       if (err) {
           res.status(500).send('Error liking comment');
       } else {
              res.sendStatus(200);
         }
    });
});

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});
