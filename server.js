const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Archivo no encontrado");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

const port = 3000; // Cambia el puerto a uno no privilegiado
server.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

