import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App/index";

const domNode = document.getElementById("root");
if (domNode) {
  hydrateRoot(domNode, <App />);
}
