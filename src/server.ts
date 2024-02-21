import express from 'express'
import cors from 'cors'

import { routerNote } from './router/router-note'

const server = express()
const port = process.env.PORT || 8182

server.use(express.json())
server.use(cors())

server.use('/note', routerNote)


server.listen(port, () => {
  console.log(`server ten running, http://localhost:${port}`)
})