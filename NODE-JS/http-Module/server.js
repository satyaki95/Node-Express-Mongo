const http = require("http");

const port = 3000;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  //res.writeHead(202, { "Content-Type": "text/plain" });
  res.writeHead(202, { "Content-Type": "text/html" });
  res.write("<h1>Hello</h1>");
  res.end();
});

myServer.listen(port, localHost, () => {
  console.log(`Server is running at http://${localHost}:${port}`);
});
