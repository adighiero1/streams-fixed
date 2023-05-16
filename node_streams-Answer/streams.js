const { createReadStream } = require("fs");
const { join } = require("path");
const { createServer } = require("http");

const serverPort = 3000;

const server = createServer((request, response) => {
  const { url, method } = request;

  if (url === "/" && method === "GET") {
    response.setHeader("Content-Type", "text/html");
    const indexReadStream = createReadStream(
      join(__dirname, "./public/index.html")
    );
    indexReadStream.pipe(response);
  } else {
    response.setHeader("Content-Type", "text/html");
    const notFoundReadStream = createReadStream(
      join(__dirname, "./public/notFound.html")
    );
    notFoundReadStream.pipe(response);
  }
});

server.listen(serverPort, () =>
  console.log("Server listening on port " + serverPort + "...")
);
