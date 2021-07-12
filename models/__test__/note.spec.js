const Note = require('../note')

describe('Note model', () => {

  test('note name must be required', async () => {
    expect.assertions(1)

    try {
      await Note.create({
        someName: 'Bokhari'
      })
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
  test('body must be required', async () => {
    expect.assertions(1)

    try {
      await Note.create({
        description: 'Bokhari'
      })
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
  test('description must be required', async () => {
    expect.assertions(1)

    try {
      await Note.create({
        body: 'Bokhari'
      })
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
  test('author must be required', async () => {
    expect.assertions(1)

    try {
      await Note.create({
        length: 1,
        noteName: 'Second Note'
      })
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
  test('email must be required', async () => {
    expect.assertions(1)

    try {
      await Note.create({
        body: 'A notesbody',
        noteName: 'Third Note'
      })
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
  test('note name must be unique', async () => {
    expect.assertions(1)

    try {
      await User.init()
      await User.create([
        {
          noteName: 'First Note',
          body: 'some body here'
        },
        {
          noteName: 'First Note',
          body: 'another body here'
        }
      ])
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
  test('email name must be unique', async () => {
    expect.assertions(1)

    try {
      await User.init()
      await User.create([
        {
          noteName: 'First Note',
          email: 'abc@gmail.com'
        },
        {
          noteName: 'First Note',
          email: 'abc@gmail.com'
        }
      ])
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
  // test('note name created successfully', async () => {
  //   expect.assertions(1)
  //
  //   const note = await Note.create({ noteName: "My very first note!"})
  //
  //   try {
  //     await note
  //     expect(note.noteName).toBe("My very first note!")
  //
  //   } catch (e) {
  //     //expect(e).toBeTruthy()
  //   }
  // })
  // test('notes should have correct fields', async () => {
  //   const today = Date.now()
  //   const {_id, __v, ...note} = (await Note.create({
  //     noteName: 'Bokhari',
  //     body: 'some body here',
  //     email: 'a@gmail.com',
  //     createdAt: today, // they were born today 😎
  //     length: 1008,
  //     noteAuthor: 'Ahad Bokhari',
  //     description: 'My notes description'
  //   })).toObject()
  //
  //   expect(note).toEqual({
  //     noteName: 'Bokhari',
  //     body: 'some body here',
  //     email: 'a@gmail.com',
  //     createdAt: new Date(today), // they were born today 😎
  //     length: 1008,
  //     noteAuthor: 'Ahad Bokhari',
  //     description: 'My notes description'
  //   })
  // })
})
