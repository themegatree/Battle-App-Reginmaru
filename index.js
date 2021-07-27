const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({ extended : true}))

app.get('/', (req, res) => {
  res.render("index.ejs")
})
app.post('/player1', (req, res) => {
    res.render("player1.ejs", {

        inputplayer1: req.body.input-player1,
        inputplayer2: req.body.input-player2

    })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

