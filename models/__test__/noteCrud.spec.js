const Note = require('../note')
const crud = require('../noteCrud')

describe('Note crud', () => {
  describe('getNodeById', () => {
    test('get note by object id', async () => {
      const user = await Note.create({
        name: 'Note 1',
        author: 'Ahad B',
        email: 'a@a.com',
        body: 'This is the body of the note',
        description: 'Description of note 1'
      })
      const match = await crud.getNoteById(user.id)

      expect(match.id).toBe(user.id)
    })
  })
  describe('get all notes in the DB', async () => {
    test('get all notes in the DB', async () => {
      const notesToCreate = [
        {
          name: 'Note 1',
          author: 'Ahad B',
          email: 'a@a.com',
          body: 'This is the body of the note',
          description: 'Description of note 1'
        },
        {
          name: 'Note 2',
          author: 'Ahad Bo',
          email: 'a@as.com',
          body: 'This is the body of the note 2',
          description: 'Description of note 2'
        },
        {
          name: 'Note 1',
          author: 'Ahad Bok',
          email: 'a@aa.com',
          body: 'This is the body of the note 3',
          description: 'Description of note 3'
        }
      ]
      const notes = await Note.create(notesToCreate)
      const matchedNotes = await crud.getAllNotes()

      expect(matchedNotes).toHaveLength(notes.length)
    })
  })
  describe('createNote', () => {
    test('create a user', async () => {
      const noteConfig = {
              name: 'Note 1',
              author: 'Ahad Bok',
              email: 'a@aa.com',
              body: 'This is the body of the note 3',
              description: 'Description of note 3'
      }
      const {id} = await crud.createNote(noteConfig)
      const match = await Note.findById(id).exec()
      expect(match.id).toBe(id)
    })
  })
})
