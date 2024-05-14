import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import App from "../client/App/index";

const server = express();

server.use("/static", express.static("dist/static"));

server.get("/", (_, res) => {
  const app = ReactDOMServer.renderToString(React.createElement(App));

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My SSR App</title>
    </head>
    <body>
      <div id="root">${app}</div>
      <script src="/static/client.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
