import express from 'express'
import db from 'src/db'
import { validateUrl, validateToken } from 'src/validators'
import { generateToken } from 'src/generators'

const router = express.Router()

router.get('/api/aliases/:token([A-Za-z0-9]+)', (req, res) => {
  const alias = db.get('aliases')
    .find({ token: req.params.token })
    .value()

  if (alias) {
    res.send({
      token: alias.token,
      url: alias.url
    })
  } else {
    res.status(404).send({
      message: 'Alias not found'
    })
  }
})

router.post('/api/aliases', (req, res) => {
  const token = req.body.token || generateToken(10)
  const url = req.body.url

  if (!validateToken(token) || !validateUrl(url)) {
    res.status(400).send({
      message: 'Invalid request data'
    })
  } else {
    const alias = db.get('aliases')
      .find({ token })
      .value()

    if (alias) {
      res.status(400).send({
        message: 'Alias with the same token currently exists'
      })
    } else {
      const alias = { token, url }
      db.get('aliases')
        .push(alias)
        .write()

      res.send(alias)
    }
  }
})

export default router
