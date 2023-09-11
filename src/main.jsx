import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Providers/AuthProviders";
import router from "./Routes/Routes";
import "./main.css";
import { store } from "./redux/app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </Provider>
  </React.StrictMode>
);
