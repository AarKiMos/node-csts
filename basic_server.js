const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Hello world");
    resp.end();
  })
  .listen(5200);
