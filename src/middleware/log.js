module.exports = (req, res, next) => {
  console.info(
    `${req.method} ${req.protocol}://${req.get('host') + req.originalUrl}`
  );
  next();
};
