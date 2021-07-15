const Post = require('../post')
const Author = require('../author')

describe('Post model', () => {
  test('author and id type are required', async () => {
    expect.assertions(2)
    const content = 'Movies are awesome!'
    try {
      await Post.create({
        content,
        title: 'Books on movies',
        contentLength: content.length
      })
    } catch (e) {
      expect(e).toBeTruthy()
    }

    try {
      await Post.create({
        content,
        contentLength: content.length,
        title: 'Top ten movie books',
        author: 'hello'
      })
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
  test('author must ref author collection', async () => {
    const name = 'Ahad Bokhari'
    const content = 'Movies are awesome!'
    const author = await Author.create({
      name,
      bio: 'Out of office, ha!'
    })

    const post = await Post.create({
      content,
      contentLength: content.length,
      title: 'Books on movies',
      author: author.id
    })

    const p = await post.populate('author').execPopulate()
    expect(p.author.name).toBe(name)
  })
})
