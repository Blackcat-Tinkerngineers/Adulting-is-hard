const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const {join} = require('path');
let notes = require('./db/db.json');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
res.redirect("index.html");
});
app.get('/notes',function(req,res){
res.redirect("notes.html");
});

app.get('/api/notes', (req, res) => {
res.json(notes);
});
app.post('/api/notes', (req, res) => {
  if(req.body){
    req.body.id = Math.floor(Math.random() * 10000);
    let newNote = req.body;
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
  }
});

app.listen(port, () => console.log(`listening on port ${port}...`));