import { Server } from "socket.io";

let io;

export async function GET(req) {
  if (!io) {
    io = new Server(global.server, {
      path: "/api/socket/io",
      addTrailingSlash: false,
    });

    io.on("connection", (socket) => {
      console.log("Socket connected:", socket.id);
    });

    global.io = io;
  }

  return new Response("Socket server started", { status: 200 });
}
