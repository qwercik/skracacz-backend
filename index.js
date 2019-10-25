const express = require('express')
const logger = require('morgan')
const indexRouter = require('routes/index')

const app = express()
const port = 3000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)

// error handler
app.use((req, res) => {
  res.status(404).send({
    message: 'Unknown route'
  })
})

app.listen(port, () => console.log(`Web server running at port ${port}`))
