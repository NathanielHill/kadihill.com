import * as sapper from '../__sapper__/server.js'
import express from 'express'

express()
  .use(express.static('static'))
  .use(sapper.middleware())
  .listen(process.env.PORT, err => {
    if (err) console.log('error', err)
  })
