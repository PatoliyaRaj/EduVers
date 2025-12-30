import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SmoothScroll from "./components/SmoothScroll";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScroll>
      <ToastContainer />
      <Toaster />
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false}> */}
        <App />
        {/* </ReactQueryDevtools> */}
      </QueryClientProvider>
    </SmoothScroll>
  </React.StrictMode>
);
