const express = require('express');
const fs = require("fs");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get('/api/v1/*', (req, res) => {
  const fileContents = fs.readFileSync("endpoints.json");
  const endpoints = JSON.parse(fileContents);
  const path = req.originalUrl.replace("/api/v1/", "");
  res.status(200).send(endpoints[path])
});

app.post('/add', (req, res) => {
  const body = req.body;
  const fileContents = fs.readFileSync("endpoints.json");
  const endpoints = JSON.parse(fileContents);
  const updatedEndpoints = Object.assign(body, endpoints);

  fs.writeFile("endpoints.json", JSON.stringify(updatedEndpoints), function(err) {
    if (err) {
      console.log(err);
      res.status(500).send({"success": false});
    } else {
      res.status(200).send({"success": true});
    }
  });
});

app.listen(5000, () => {
  console.log('server running on port 5000')
});
