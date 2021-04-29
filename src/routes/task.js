const express = require('express')
// const UserCtrl = require('../controllers/user')
const TaskCtrl = require('../controllers/task')
const md_auth = require('../middlewares/auth')
const multipart = require('connect-multiparty')
// const md_upload = multipart({ uploadDir: './uploads/users' })

const api = express.Router()

// api.get('/task/:id', md_auth.ensureAuth, TaskCtrl.getTask)
// api.get('/tasks', md_auth.ensureAuth, TaskCtrl.getAllTasks)
api.post('/task', md_auth.ensureAuth, TaskCtrl.saveTask)
// api.delete('/delete-task/:id', md_auth.ensureAuth, TaskCtrl.deleteTask)

module.exports = api
