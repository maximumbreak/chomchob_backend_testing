import express from 'express'
let router = express.Router()

router.get('/', function(req, res) {
  return res.send('respond with a resource')
})

export default router
