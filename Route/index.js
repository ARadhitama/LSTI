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
app.put('/assignment/:id/:idAss', db.updateAssignmentStatus)
app.get('/user', db.getUser)
app.get('/user/:id', db.getUserbyID)
app.put('/user/:id', db.updateUser)
app.get('/performance/:id', db.getPerformance)
app.delete('/user/:id', db.deleteUser)
app.post('/userAssignment/:id', db.newAssignment)
app.put('/userAssignment/:id', db.updateAssignment)
app.delete('/userAssignment/:id/:idAss', db.deleteAssignment)

app.listen(port, () => {
    console.log('Running on port ${port}.')
})