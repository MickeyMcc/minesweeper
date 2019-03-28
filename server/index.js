const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3001;
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
