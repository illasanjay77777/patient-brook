import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DoMMer } from "./App";
import { Dark } from "./App";
import App from "./App";
import { Ref } from "./App";
import { WithMemo } from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Ref />
    <App />
    <DoMMer />
    <WithMemo />
    <Dark />
    <App />
    <App />
    <App />
    <App />
  </StrictMode>
);
