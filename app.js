const app = require('./src')
require('./db/mongoose')

app.listen(3000, () => console.log('Server listening on port 3000'))
