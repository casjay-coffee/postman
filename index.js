const express = require('express');

const app = express();

const public = path.join(__dirname, 'public');

app.use(bodyParser.json());

app.get('/', cors(), (req, res) => {
  try {
    res.sendFile(`${public}/index.html`);
  } catch (error) {
    res.send('An error has occurred');
  }
});

app.listen(port, () =>
  console.log(`Starting server: http://${hostname}:${port}`)
);
