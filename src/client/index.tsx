import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { JsonResponse } from "./types";

declare global {
  interface Window {
    __INITIAL_DATA__: JsonResponse;
  }
}

const initialData = window.__INITIAL_DATA__;

const domNode = document.getElementById("root");
if (domNode) {
  hydrateRoot(domNode, <App data={initialData} />);
}
