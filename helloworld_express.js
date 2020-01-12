const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.get('/foo/:var', (req, res) => res.send(req.params.var))
app.post('/form', (req, res) => res.send(req.body.foo + req.body.bar))

app.use(bodyParser.json()) //parse JSON body
app.use(bodyParser.urlencoded()) //parse x-www-form-urlencoded body


