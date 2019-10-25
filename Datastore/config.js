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
    const idUser = parseInt(request.params.id)

    pool.query('SELECT * FROM Assignment Where idUser = $1 ORDER BY idAss ASC', (error, result) =>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })
}

const updateAssignmentStatus = (request,response) => {
    const idUser = parseInt(request.params.id)
    const idAss = parseInt(request.params.idAss)
    const {status} = request.body

    pool.query('UPDATE Assignment SET status = $1 WHERE idUser = $2, idAss = $3', [status, idUser, idAss], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).send('Assignment ID: ${idAss} has been updated')
    })
}

const newUser = (request,response) => {
    const {idUser, name, email, age, address, phoneNumber} = request.body

    pool.query('INSERT INTO Karyawan (idUser, name, email, age, address, phoneNumber) VALUES ($1, $2, $3, $4, $5, $6', [idUser, name, email, age, address, phoneNumber], (error,result) => {
        if (error) {
            throw error
        }
        response.status(201).send('User added with ID: ${result.rows[0].id}')
    })

}

const getUser = (request,response) => {
    pool.query('SELECT * FROM Karyawan ORDER BY idUser ASC', (error,result) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserbyID = (request,response) => {
    const idUser = parseInt(request.params.id)

    pool.query('SELECT * FROM Karyawan WHERE id = $1', [idUser], (error,result) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateUser = (request,response) => {
    const idUser = parseInt(request.params.id)
    const {name, email, age, address, phoneNumber} = request.body

    pool.query('UPDATE Karyawan SET name = $1, email = $2, age = $3, address = $4, phoneNumber = $5 WHERE idUser = $6', [name, email, age, address, phoneNumber, idUser], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).send('User ID: ${idUser} has been updated')
    })
}

const getPerformance = (request,response) => {
    const idUser = parseInt(request.params.id)

    pool.query('SELECT * FROM Assignment WHERE idUser = $1, status = true',[idUser], (error,result) => {
        if (error) {
            throw error
        }
        response.status.json()
    })
}

const deleteUser = (request,response) => {
    const idUser = parseInt(request.params.idUser)

    pool.query('DELETE FROM Karyawan WHERE id = $1', [idUser], (error,result) => {
        if (error) {
            throw error
        }
        response.status(200).send('User with ID: ${idUser} has been deleted')
    })
}

const newAssignment = (request,response) => {
    const idUser = parseInt(request.params.idUser)
    const {assignmentName, status, description} = request.body

    pool.query('INSERT INTO Assignment(assignmentName, status, description) VALUES ($1,$2,$3) WHERE idUser = $4', [assignmentName, status, description, idUser,], (error,result) => {
        if (error) {
            throw error
        }
        response.status(200).send('Assignment added into user ID: ${idUser}')
    })
}

const updateAssignment = (request,response) => {
    const idUser = parseInt(request.params.id)
    const idAss =  parseInt(request.params.idAss)
    const {assignmentName, status, description} = request.body

    pool.query('UPDATE Assignment SET assignmentName = $1, status = $2, description = $3 WHERE idUser = $4, idAss = $5', [assignmentName, status, description, idUser, idAss], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).send('User ID: ${idUser} assignment ID: ${idAss} has been updated')
    })

}


const deleteAssignment = (request,response) => {
    const idUser = parseInt(request.params.id)
    const idAss = parseInt(request.params.idAss)

    pool.query('DELETE FROM Assignment WHERE id = $1, idAss = $2', [idUser,idAss], (error,result) => {
        if (error) {
            throw error
        }
        response.status(200).send('Assignment from user ID: ${idUser} with assignment ID: ${idAss} has been deleted')
    })
}
module.exports = {
    getAssignment,
    updateAssignmentStatus,
    getUser,
    getUserbyID,
    newUser,
    updateUser,
    deleteUser,
    getPerformance,
    newAssignment,
    updateAssignment,
    deleteAssignment
}