/* route API */

const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 3000
const db = require('../Datastore/config')

app.get('/', (request,response) => {
    response.json({
        info : 'API performa karyawan ITB'
        // dokumentasi API
    }) 
})

app.get('/assignment/:id', db.getAssignment)
app.put('/assignment/:id', db.updateAssignment)
app.get('/user', db.getUser)
app.get('/user/:id', db.getUserbyID)
app.get('/performance/:id', db.getPerformance)

app.listen(port, () => {
    console.log('Running on port ${port}.')
})