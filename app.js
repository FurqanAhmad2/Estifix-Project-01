const express = require('express')
const app = express()
const port = 3000
const path=require('path')
const routes=require("./routes/routes")
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));


app.use('/',routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})