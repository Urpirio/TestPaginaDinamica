import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PaginaDinamica from "./src/PaginaDinamica";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PaginaDinamica/>
    </StrictMode>
);