const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  // Handle connection
  connection.on("data", (data) => {
    const lines = data.toString().split("\r\n");

    for (const line of lines) {
        if(line.trim().toUpperCase() === "PING") {
            connection.write("+PONG\r\n");
        }
    }
  })
});

server.listen(6379, "127.0.0.1");
