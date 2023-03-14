const express = require("express")
const router = express.Router()
const Book = require('../../models/Book')


// router.get('/', (req, res) => res.send("Hello World!"));
router.get('/test', (req,res) => res.send("book route testing"))

// show all the books
router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({
        nobooksfound: 'no books found'
    }))
})

router.get('/:id', (req, res) => {
    Book.findById(req.param.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobookfound: "no book found"}))
} )

router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Book added successfully'}))
        .catch(err => res.status(400).json({error: err}))
})


module.exports = router