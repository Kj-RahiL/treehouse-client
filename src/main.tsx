import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <div className="max-w-screen mx-auto">
          <RouterProvider router={router} />
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
