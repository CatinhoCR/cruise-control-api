'use strict'

const fs = require('fs')
const path = require('path')
const mongoosePaginate = require('mongoose-pagination')
const Task = require('../models/task')
const User = require('../models/user')
const { time } = require('console')

function saveTask(req, res) {
  const task = new Task()
  let params = req.body

  task.title = params.title
  task.description = params.description
  task.location = params.location
  task.time = params.time
  task.startsAt = params.startsAt
  task.endsAt = params.endsAt
  task.dateAdded = params.dateAdded
  task.dateModified = params.dateModified

  task.save((err, taskStored) => {
    if (err) {
      res.status(500).send({ message: 'Error en el servidor' })
    } else {
      if (!taskStored) {
        res.status(404).send({ message: 'No se ha podido guardar la canción.' })
      } else {
        res.status(200).send({ task: taskStored })
      }
    }
  })
}

module.exports = {
  saveTask
}
