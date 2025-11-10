import http from "http";
import { WebSocketServer } from "ws";
import { setupWSConnection } from "y-websocket/bin/utils"; // Fixed import path

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 1234;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("✅ Yjs WebSocket Server is running");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req, { gc: true });
});

server.listen(port, host, () => {
  console.log(`✅ Yjs WebSocket Server running on ${host}:${port}`);
});