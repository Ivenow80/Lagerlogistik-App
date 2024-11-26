const http = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hallo, Express!");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server läuft auf http://127.0.0.1:3000/");
});
