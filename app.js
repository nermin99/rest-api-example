require('./db/mongoose')
const { port } = require('exp-config')
const app = require('./src')

app.listen(3000, () => console.log(`Server listening on port ${port}`))
