import { setupWSConnection } from "y-websocket/bin/utils.js";
import { WebSocketServer } from "ws";
import http from "http";

const port = process.env.PORT || 1234;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Yjs WebSocket Server is running");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req, { gc: true });
});

server.listen(port, () => {
  console.log(`✅ Yjs WebSocket Server running on port ${port}`);
});
