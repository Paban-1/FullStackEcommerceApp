const express = require('express')
const router = express.Router()
const ownerModel = require('../model/owner-model')

if (process.env.NODE_ENV === 'development') {
    router.post('/create', function (req, res) {
        res.send('creating owner')
    })
}

router.get('/', function (req, res) {
    res.send('working!')
})




module.exports = router