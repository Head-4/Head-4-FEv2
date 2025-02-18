import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {GlobalStyled} from "./styles/GlobalStyled";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import {LoadingPage} from "./pages/utilPages/LoadingPage";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <LoadingPage/>
            <GlobalStyled/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
};