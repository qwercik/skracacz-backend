const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send({
    message: 'Hello, API world!'
  })
})

app.listen(port, () => console.log(`Webserver running on port ${port}`))
