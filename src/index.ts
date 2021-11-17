import express from 'express'

const { PORT = 3000 } = process.env

const app = express()

app.get('/', (_, res) => {
    res.send('Hello world!')
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
