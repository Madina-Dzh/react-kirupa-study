import { createRoot } from "react-dom/client";

// Для 13 главы
// import HelloWorld from "./chapter-13/HelloWorld.js";
// import "./chapter-13/index.css"

// Для 14 главы
// import IPAddressContainer from "./chapter-14/IPAddressContainer";
// import "./chapter-14/index.css"

// Для 15 главы
import "./chapter-15/index.css"
import TodoList from "./chapter-15/TodoList";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <TodoList />
    </div>
);