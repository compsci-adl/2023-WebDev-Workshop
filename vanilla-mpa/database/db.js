import sqlite from 'sqlite3';

const db = new sqlite.Database('./database/guestbook.sqlite', (err) => {
    if (err) {
        console.error(err.message);
        return err;
    }
    console.log('Connected to the SQlite database.');
});

export function createDB() {
    const query = `CREATE TABLE IF NOT EXISTS comments ( id INT PRIMARY KEY, name VARCHAR(255), content TEXT, nLikes INT DEFAULT 0 )`;
    db.prepare(query, function (err) {
        if (err) {
            console.error(err.message);
            return err;
        }
        console.log('comments table query prepared');
    })
        .run(function (err) {
            if (err) {
                console.error(err.message);
                return err;
            }
            console.log('comments table created');
        })
        .finalize();
}

export function createComment(name, content, callback) {
  // In a real-world application, we would use a library like uuid to generate a unique id
    const id = Math.floor(Math.random() * 1000000);
    const query = `INSERT INTO comments(id, name, content) VALUES(?, ?, ?)`;
    db.run(query, [id, name, content], function (err) {
        if (err) {
            console.error(err.message);
            callback(err);
            return err;
        }
        callback(null);
    });
}

export function getComments(callback) {
    const query = `SELECT * FROM comments`;
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            callback(null, err);
        }
        callback(rows, null);
    });
}

export function likeComment(id, callback) {
    const query = `UPDATE comments SET nLikes = nLikes + 1 WHERE id = ?`;
    db.run(query, [id], function (err) {
        if (err) {
            console.error(err.message);
            callback(err);
            return err;
        }
        callback(null);
    });
}