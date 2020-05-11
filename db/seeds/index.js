require('../mongoose')

module.exports.seed = () => {
  Promise.all([
    require('./users').seed(),
    require('./cars').seed()
  ])
    .then(() => process.exit(0))
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
}

module.exports.purge = () => {
  Promise.all([
    require('./users').purge(),
    require('./cars').purge()
  ])
    .then(() => process.exit(0))
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
}
