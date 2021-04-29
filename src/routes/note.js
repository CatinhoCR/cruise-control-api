const express = require('express')
// const UserCtrl = require('../controllers/user')
const NoteCtrl = require('../controllers/note')
const md_auth = require('../middlewares/auth')
const multipart = require('connect-multiparty')
// const md_upload = multipart({ uploadDir: './uploads/users' })

const api = express.Router()

api.get('/note/:id', md_auth.ensureAuth, NoteCtrl.getNote)
api.get('/notes', md_auth.ensureAuth, NoteCtrl.getAllNotes)
api.post('/note', md_auth.ensureAuth, NoteCtrl.saveNote)
api.delete('/delete-note/:id', md_auth.ensureAuth, NoteCtrl.deleteNote)

module.exports = api
