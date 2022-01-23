import express, { Router, static, json } from 'express';
const app = express();
const port = process.env.PORT || 3001;
import { join } from 'path';
const router = Router();
import fs from 'fs';
const dirPath = join(__dirname,'/index.html', '/notes.html','/script.js','icons8-home.svg','icons8-home.svg');
static(join(__dirname, '/public'));


app.use(static('public'));
app.use(static('files'));
app.use(json());

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


router.get('/index',function(req,res){
  res.sendFile(join(public, '/index.html'));

});

router.get('/notes',function(req,res){
  res.sendFile(join(public, '/notes.html'));
});

router.get('/scipt',function(req,res){
  res.sendFile(join(public, './javascripts/script.js'));
});

router.get('/styles',function(req,res){
  res.sendFile(join(public, './stylesheets/styles.css'));
});


app.use('/', router);
app.listen(port, () => console.log('listening on port ${port}...'));

