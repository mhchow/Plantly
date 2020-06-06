const express = require('express');
const app = express();
const PORT = 4000;
// const path = require('path');

// // app.get('/', (req, res) => {
// //   res.send('Hello World');
// // });

// app.use(express.static(path.resolve(__dirname, '/../public')));
app.use(express.json());
app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => {
  console.log('Planty is listening at ' + PORT);
});

