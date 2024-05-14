import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";
import { JsonResponse } from "../client/types";

require("dotenv").config();
const server = express();

server.use("/static", express.static("dist/static"));

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const apiUrl = `${process.env.API_URL}/${id}/json`;
    const response = await fetch(apiUrl);
    const data: JsonResponse = await response.json();

    const app = ReactDOMServer.renderToString(
      React.createElement(App, { data })
    );

    // We are serializing and setting data to window object's__INITIAL_DATA__ & escaped the `<` character to prevent XSS attacks
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>JSON to React SSR</title>
        <script>window.__INITIAL_DATA__ = ${JSON.stringify(data).replace(
          /</g,
          "\\u003c"
        )}</script>
      </head>
      <body>
        <div id="root">${app}</div>
        <script src="/static/bundle.js"></script>
      </body>
      </html>
    `;

    res.send(html);
  } catch (error) {
    console.error("Failed to fetch API data:", error);
    res.status(500).send("Error fetching API data");
  }
});

server.get("*", (req, res) => {
  res.status(404).send("Page not found - try adding an ID to the URL");
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
