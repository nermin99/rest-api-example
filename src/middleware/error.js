module.exports = (err, req, res, next) => {
  const output = {
    name: err.name || 'Error',
    message: err.message
  }

  console.error(err)
  res.status(err.statusCode || 500).json(output)
}
