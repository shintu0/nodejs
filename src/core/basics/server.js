import http from "node:http";

const PORT = 7000;
const server = http.createServer((req, res) => {
  res.writeHead(200, "OK", { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "🙏Har Har Mahadev🙏" }));
  res.end();
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
