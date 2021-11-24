import dotenv from 'dotenv'
import websocket from './websocket'
import http from './http'

dotenv.config()

const wsServer = websocket.start()

http.listen(wsServer)
