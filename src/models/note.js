'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  content: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
  dateModified: {
    type: Date,
    default: Date.now(),
  },
  category: String,
  labels: String,
  file: String,
  username: { type: Schema.ObjectId, ref: 'User'},
})

// @todo category, labels needs to be matched to another entity

module.exports = mongoose.model('Note', NoteSchema)
