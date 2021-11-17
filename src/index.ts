import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

dotenv.config()

const { PORT = 3000 } = process.env

const app = express()

app.get('/client', (_, res) => {
    res.sendFile(path.resolve(__dirname, './client.html'))
})

app.get('/streamer', (_, res) => {
    res.sendFile(path.resolve(__dirname, './streamer.html'))
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
