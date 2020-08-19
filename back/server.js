const express = require("express");
const app = express();
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
const db = require('./config/db')
const Router = require('./routes')
const port = process.env.PORT || 3000

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(volleyball);

app.use('/api', Router)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/' + 'index.html')
})

db.sync({force: false})
.then(()=>{
    app.listen(port, ()=>{console.log('listening on port 3000')})
})
.catch((err) => console.log(err))