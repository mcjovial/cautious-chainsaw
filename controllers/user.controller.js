exports.signinUser = async (req, res) => {
  const { password, username } = req.body
  if (!password || !username) {
    res.sendStatus(400)
    return
  }

  res.send({ userId: 0 })
}