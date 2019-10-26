import low from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

export default (async () => {
  const adapter = new FileAsync('db.json')
  const db = await low(adapter)

  db.defaults({ aliases: [] })
    .write()

  return db
})()
