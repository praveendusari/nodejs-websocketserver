import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    if (data) {
      // Broadcast the message to all clients
      wss.clients.forEach(function each(client) {
        if (client.readyState === client.OPEN) {
          client.send(`${data}`);
        }
      });
    }
  });

  ws.send('something');
});
