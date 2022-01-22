const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const router = express.Router();
const fs = require('fs');
const dirPath = path.join(__dirname,'/index.html', '/notes.html');
express.static(path.join(__dirname, '/public'));


app.use(express.static('public'));
app.use(express.static('files'));
app.use(express.json());

app.get('/notes', (req, res) => {
  res.status(200).send({
    date: '01-21-2022',
    title: 'shopping list',
    note: 'eggs'
  });
});

app.post('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!text) {
    return res.status(404).send({ message: 'Huston we have a problem! Tracker unable to update entry request' });
  }
  res.send({
    Note: 'Tracker is ready for a new entry ${text} and ID of ${id}',

  });
});


router.get('/',function(req,res){
  res.sendFile(path.join(public, '/index.html'));

});

router.get('/notes',function(req,res){
  res.sendFile(path.join(public, '/notes.html'));
});


app.use('/', router);
app.listen(port, () => console.log('listening on port ${port}...'));

