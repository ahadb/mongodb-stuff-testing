const express = require('express')
const morgan = require('morgan')
const connect = require('../connect')
const {json, urlencoded} = require('body-parser')
const app = express()
const Note = require('../models/note')

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(json())

app.get('/note/:id', async (req, res) => {
  const noteId = req.params.id
  const note = await Note.findById(id).exec()
  res.status(200).json(note)
})

app.get('/notes', async (req, res) => {
  const notes = await Note.find({}).lean().exec()
  res.status(200).json(notes)
})

app.post('/note', async () => {
  const noteToCreate = req.body.note
  const note = await Note.create(noteToCreate)
  res.status(201).json(note.toJSON())
})

connect('mongodb://localhost:27017/notes')
    .then(() => app.listen(5000, () => {
      console.log('server on http://localhost:5000')
    }))
    .catch(e => console.error(e))
