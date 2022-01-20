const express = require('express');
const app = express();
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

  const { notes } = require('notes');

  app.get('/api/notes', (req, res) => {
    res.send('Hello!');
  });