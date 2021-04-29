'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  location: {
    type: String,
  },
  time: {
    type: String,
    require: true,
  },
  startsAt: {
    type: Date,
    default: Date.now(),
  },
  endsAt: {
    type: Date,
    default: Date.now(),
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  dateModified: {
    type: Date,
    default: Date.now,
  },
})
module.exports = mongoose.model('Task', TaskSchema)
