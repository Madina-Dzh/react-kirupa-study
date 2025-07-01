//import React from "react";
//import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld.js";

/* Этот способ устарел :"(
ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);
*/

import { createRoot } from "react-dom/client";
import "./index.css"

const root = createRoot(document.getElementById("root"));
root.render(<HelloWorld />);