const { Router } = require("express");

const messageRouter = Router()

messageRouter.get('/new', (req, res) =>{
    res.send('form')
})

messageRouter.post('/new', (req, res) => {
    
})