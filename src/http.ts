import express from 'express'
import path from 'path'
import { isNumber } from './is-number'
import { Server } from 'ws'

const { HTTP_PORT = 3000 } = process.env

const port = isNumber(HTTP_PORT) ? HTTP_PORT : parseInt(HTTP_PORT)

const app = express()

app.get('/client', (_, res) => {
    res.sendFile(path.resolve(__dirname, './client.html'))
})

app.get('/streamer', (_, res) => {
    res.sendFile(path.resolve(__dirname, './streamer.html'))
})

const http = {
    listen: (wsServer: Server) => {
        const server = app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`)
        })

        server.on('upgrade', (message, duplex, buffer) => {
            wsServer.handleUpgrade(message, socket, buffer, (socket) => {
                wsServer.emit('connection', socket, message)
            })
        })
    },
}

export default http
