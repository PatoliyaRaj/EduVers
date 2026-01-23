import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SmoothScroll from "./components/SmoothScroll";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

// Redux imports
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <SmoothScroll>
      <ToastContainer />
      <Toaster />
        <App />
    </SmoothScroll>
    </Provider>
  </React.StrictMode>
);
