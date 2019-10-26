import getDatabaseInstance from 'src/db'
import { validateUrl, validateToken } from 'src/validators'
import { generateToken } from 'src/generators'

export default {
  async findOneAlias (req, res) {
    const db = await getDatabaseInstance()

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
  },
  async createAlias (req, res) {
    const db = await getDatabaseInstance()

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
  }
}
