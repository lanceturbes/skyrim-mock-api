import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { worker } from "./mocks/browser";

(async () => {
  await worker.start();

  const root = document.querySelector("#root");
  ReactDOM.render(<App />, root);
})();
