import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    if(data) {
      //console.log('received: %s', data);
      ws.send(`${data}`);
    }
  });
  ws.send('something');
});

fetch("/").then(() => {
  const wss = new WebSocketServer({ port: 8080 });

  wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
      if(data) {
        //console.log('received: %s', data);
        ws.send(`${data}`);
      }
    });
    ws.send('something');
  });
  
};