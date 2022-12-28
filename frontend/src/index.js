import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./font.css";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "components/CryptoContext";
ReactDOM.render(
    // <React.StrictMode>
        <ChakraProvider theme={theme} resetCSS={true}>
            <CryptoContext>
                <App />
            </CryptoContext>
        </ChakraProvider>,
    // </React.StrictMode>,
    document.getElementById("root")
);
