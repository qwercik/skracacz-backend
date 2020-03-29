import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import aliasesRouter from 'src/routes/aliases'

const app = express()
const port = 3001

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', aliasesRouter)

// error handler
app.use((req, res) => {
  res.status(404).send({
    message: 'Unknown route'
  })
})

app.listen(port, () => console.log(`Web server running at port ${port}`))
