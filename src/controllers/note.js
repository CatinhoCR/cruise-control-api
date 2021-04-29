'use strict'

var fs = require('fs')
var path = require('path')
var mongoosePaginate = require('mongoose-pagination')
var Note = require('../models/note')
var User = require('../models/user')

// @todo updateNote, uploadFile, getFile
// @todo assign note to user, and date of creation || modified
// @todo assign note to category and/or date
// @todo assign labels to note

function getNote(req, res) {
  const noteId = req.params.id

  Note.findOne({ _id: noteId }, (err, note) => {
    if (err) {
      res.status(500).send({ message: 'Error en la petición al server.' })
    } else {
      if (!note) {
        res.status(404).send({ message: 'El usuario no existe.' })
      } else {
        res.status(200).send({ note: note })
      }
    }
  })
}

function getAllNotes(req, res) {
  Note.find(function (err, notes) {
    if (err) {
      res.status(500).send({ message: 'Error en la petición' })
    } else {
      if (!notes) {
        res.status(404).send({ message: 'No existen notas'})
      } else {
        res.status(200).send({ notes })
      }
    }
  })
}

function saveNote(req, res) {
  var note = new Note()

  var params = req.body

  note.title = params.title
  note.description = params.description
  note.content = params.content
  note.dateAdded = params.dateAdded
  note.dateModified = params.dateModified
  note.category = params.category
  note.labels = params.labels
  note.file = params.file
  note.username = params.username

  note.save((err, noteStored) => {
    if (err) {
      res.status(500).send({ message: 'Error en el servidor' })
    } else {
      if (!noteStored) {
        res.status(404).send({ message: 'No se ha podido guardar la canción.' })
      } else {
        res.status(200).send({ note: noteStored })
      }
    }
  })
}

async function deleteNote(req, res) {
  const noteId = req.params.id

  Note.findByIdAndRemove(noteId, (err, noteRemoved) => {
    if (err) {
      res.status(500).send({ message: 'No se pudo borrar el usuario.' })
    } else {
      res.status(200).send({
        message: 'éxito se borró',
        note: noteRemoved,
      })
    }
  })
}

module.exports = {
  getNote,
  getAllNotes,
  saveNote,
  deleteNote
}