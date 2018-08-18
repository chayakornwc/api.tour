const express = require('express');

const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const myConnection = require('express-myconnection')

const config = require('./config')
const routes = require('./routes')
const PORT = 3009;
const moment = require('moment')

app.use(myConnection(mysql, config.tourdd, 'pool'))
app.use(cors())

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

routes(app)

app.listen(PORT, () => {
    console.log('ready server on http://localhost:' + PORT +' Now is locale time '+moment().format())
    
})