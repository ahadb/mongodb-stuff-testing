const connect = require('./connect')

connect('mongodb://localhost:27017/notes')
    .then(async connection => {
      console.log('connected')
    })
    .catch(e => console.log(e))
