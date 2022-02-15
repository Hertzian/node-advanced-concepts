module.exports = (req, res, nex) => {
  if (!re.user) return res.status(401).send({ error: 'You must log in!' })
  next()
}
