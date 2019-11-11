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

app.get('/assignment/:idUser', db.getAssignment)
app.put('/assignment/:idUser/:idAss', db.updateAssignmentStatus)
app.get('/user', db.getUser)
app.post('/user', db.newUser)
app.get('/user/:idUser', db.getUserbyID)
app.put('/user/:idUser', db.updateUser)
app.delete('/user/:idUser', db.deleteUser)
app.get('/performance/:idUser', db.getPerformance)
app.post('/userAssignment/:idUser', db.newAssignment)
app.put('/userAssignment/:idUser/:idAss', db.updateAssignment)
app.delete('/userAssignment/:idUser/:idAss', db.deleteAssignment)

app.listen(port, () => {    
    console.log('Running on port ${port}.')
})