const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//app.get("/", (req, res) => res.type('html').send(html));

app.use(express.static(__dirname+'/dist/render-example-app'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname+'/dist/render-example-app/index.html');
})


app.listen(port);
