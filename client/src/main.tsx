import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Global Styles
import "./index.css";
import { router } from "./routePaths";
import { Drawer } from "./shared/Drawer";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Drawer>
            <RouterProvider router={router} />
        </Drawer>
    </React.StrictMode>
);

console.log(
    `%c
████████╗ ██╗       ██╗███████╗███████╗████████╗██╗   ██╗
╚══██╔══╝ ██║  ██╗  ██║██╔════╝██╔════╝╚══██╔══╝╚██╗ ██╔╝
   ██║    ╚██╗████╗██╔╝█████╗  █████╗     ██║    ╚████╔╝ 
   ██║     ████╔═████║ ██╔══╝  ██╔══╝     ██║     ╚██╔╝  
   ██║     ╚██╔╝ ╚██╔╝ ███████╗███████╗   ██║      ██║   
   ╚═╝      ╚═╝   ╚═╝  ╚══════╝╚══════╝   ╚═╝      ╚═╝   
`,
    "color: skyblue"
);
