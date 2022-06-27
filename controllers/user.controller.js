const { getUser, createUser } = require("../services/user.service")

exports.signinUser = async (req, res) => {
  const { password, username } = req.body
  if (!password || !username) {
    res.sendStatus(400)
    return
  }

  res.send({ userId: 0 })
}


exports.signupUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await getUser(username)
    if (user) {
      res.status(400).send({ error: "username already taken" })
      return
    }
    const userId = await createUser(username, password)
    res.send({ userId })
  } catch (error) {
    res.sendStatus(500)
    return
  }
}
