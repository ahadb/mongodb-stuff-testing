const Note = require('./note')

const getNoteById = (id) => {
  return Note.findById(id)
      .exec()
}

const getAllNotes = () => {
  return Note.find({})
      .exec()
}

const createNote = (noteDetails) => {
  return Note.create(noteDetails)
}
const removeNoteById = (id) => {
  return Note.findByIdAndDelete(id).exec()
}

const updateNoteById = (id, update) => {
  return Note.findByIdAndUpdate(id, update, {new: true}).exec()
}

module.exports = {
  getNoteById,
  getAllNotes,
  createNote,
  removeNoteById,
  updateNoteById
}
