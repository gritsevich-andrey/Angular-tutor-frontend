const WebSocket = require('ws');
//Добавлено
const { v4: getID } = require("uuid");
const clients = [];
const room = {
  name: "",
  host: "",
  attendees: [],
};

const rooms = {};

//Рабочее - старое
const wss = new WebSocket.Server({ port: 8089 }, () => {
  console.log("Signalling server is now listening on port 8089");
});

wss.broadcast = (ws, data) => {
  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', ws => {
  console.log(`Client connected. Total connected clients: ${wss.clients.size}`);

  ws.on('message', message => {
    console.log(message + "\n\n");
    wss.broadcast(ws, message);
  });
  ws.on('close', ws=> {
    console.log(`Client disconnected. Total connected clients: ${wss.clients.size}`);
  })

  ws.on('error', error => {
    console.log(`Client error. Total connected clients: ${wss.clients.size}`);
  });
});
