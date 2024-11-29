const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.send('This is the list of our students\n');
  } else {
    countStudents(databasePath)
      .then((data) => {
        res.send(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.send(`This is the list of our students\n${err.message}`);
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
