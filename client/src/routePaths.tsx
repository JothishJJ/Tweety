// Components
import App from "./App/App.tsx";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route
                path="/login"
                lazy={async () => {
                    const { LoginPage } = await import(
                        "./App/Login/LoginPage.tsx"
                    );
                    return { Component: LoginPage };
                }}
            />
        </>
    )
);
