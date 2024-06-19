import express from 'express'
import morgan from 'morgan';
import { Server } from 'socket.io';
import { createServer } from 'node:http'

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', () => {
    console.log('User connected');
})

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send(`<h1>Hola</h1>`)
})

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})