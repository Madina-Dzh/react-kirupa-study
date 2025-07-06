import { createRoot } from "react-dom/client";

// Для 13 главы
// import HelloWorld from "./chapter-13/HelloWorld.js";
// import "./chapter-13/index.css"

import IPAddressContainer from "./chapter-14/IPAddressContainer";
import "./chapter-14/index.css"

const root = createRoot(document.getElementById("root"));
root.render(<IPAddressContainer />);