const cors = require('cors');
const express = require('express');
const { graphicsRouter } = require('./graphics');
const { showsRouter } = require('./shows');
const { usersRouter } = require('./users');
const ws = require('ws');

const app = express();

const port = 8080;

app.use(express.json());
app.use(cors());

app.use('/graphics', graphicsRouter);
app.use('/shows', showsRouter);
app.use('/users', usersRouter);

const server = app.listen(`${port}`, (error) => {
  if(error) {
    console.log('error: ', error);
  }

  console.log(`App listening at http://127.0.0.1:${port}`);
});

const wsServer = new ws.Server({server});

wsServer.on('connection', (socket) => {
  socket.on('message', (message) => {
    console.log('socket message: ', message);

    wsServer.clients.forEach((client) => {
      if(client !== socket && client.readyState === ws.OPEN) {
        client.send('new message from connected peer: ', message);
      }
    });

  });
});