import WebSocket from 'ws'

const start = () => {
    const wsServer = new WebSocket.Server({ noServer: true })

    const connectedClients: WebSocket[] = []

    wsServer.on('connection', (ws) => {
        console.log('Connected')
        // add new connected client
        connectedClients.push(ws)
        // listen for messages from the streamer, the clients will not send anything so we don't need to filter
        ws.on('message', (data) => {
            // send the base64 encoded frame to each connected ws
            connectedClients.forEach((ws, i) => {
                if (ws.readyState === ws.OPEN) {
                    // check if it is still connected
                    ws.send(data) // send
                } else {
                    // if it's not connected remove from the array of connected ws
                    connectedClients.splice(i, 1)
                }
            })
        })
    })

    return wsServer
}

const websocket = {
    start,
}

export default websocket
