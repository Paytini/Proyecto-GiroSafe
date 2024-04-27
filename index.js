const express = require('express')
const cors = require('cors')
//const { extend } = require('jquery')

const app = express()

const port = 3000

// #region 
app.use(
    express.urlencode({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

app.post('/registrado', (req, res) => {
    res.send('Estoy posteando')
})

app.get('/registrado', (req, res) => {
    res.send('Esto es un get')
})

app.listen(port, () => {
    console.log('Estoy ejecutandome en http://localhost:${port}')
})