const express = require('express')
const app = express()
const users = require('./users.json')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

   
app.get('/', (req, res) => {
    /* Refactor to GET a user by their name using query params *IF* it's passed.
    If no name is passed in query params, should still behave as it currently does */
    if(req.query)
        for(var i=0;i<users.length;i++)
            if(users[i].name[0] === req.query.name)
                res.send(users[i])
    res.send(users)
})

app.get('/:id', (req, res) => {
    /* GET a user by their id */
    res.send(users[req.params.id-1])
})

app.post('/', (req, res) => {
    res.send(users)
})



const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
