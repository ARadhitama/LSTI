/* Connect Database */

const Pool = require('pg').Pool;
const pool = new Pool({
    user : 'me',
    host : 'localhost',
    database : 'APIPegawai',
    password : '',
    port : '8080'
});

const getAssignment = (request,response) => {
    const id = parseInt(request.params.id)
}

const updateAssignmentStatus = (request,response) => {
    const id = parseInt(request.params.id)
}

const getUser = (request,response) => {

}

const getUserbyID = (request,response) => {
    const id = parseInt(request.params.id)
}

const updateUser = (request,response) => {
    const id = parseInt(request.params.id)
}

const getPerformance = (request,response) => {
    const id = parseInt(request.params.id)
}

const deleteUser = (request,response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM Karyawan WHERE id = $1', [id], (error,result) => {
        if (error) {
            throw error
        }
        response.status(200).send('User with ID: ${id} has been deleted')
    })
}

const newAssignment = (request,response) => {
    const id = parseInt(request.params.id)
}

const updateAssignment = (request,response) => {
    const id = parseInt(request.params.id)
}

const deleteAssignment = (request,response) => {
    const id = parseInt(request.params.id)
}
module.exports = pool;