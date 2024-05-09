import express from "express";

const server = express();

server.get("/", (_, res) => {
  res.send("Hello from Server");
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
