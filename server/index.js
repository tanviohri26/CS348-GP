// server/index.js
const express = require('express');

const port = 3200;

const app = express();

app.get('/test', (req, res) => {
  res.send({ data: "Server says hi!" });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});