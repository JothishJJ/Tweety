import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Navbar } from "./shared/Navbar";

// Global Styles
import "./index.css";
import { router } from "./routePaths";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Navbar />
        <RouterProvider router={router} />
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
