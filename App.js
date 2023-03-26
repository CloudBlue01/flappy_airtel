const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/main', (req, res) => {
  res.send('We\'re working on it!');
});


app.get('/data', (req, res) => {
	let data = {nom:"Bienvenu",age:19};
  	res.json(data);
});

const PORT = 6003;

app.listen(PORT, () => {
  console.log(`It's running ${PORT}`);
});

