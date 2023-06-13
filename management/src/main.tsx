import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import Login from "./pages/login/Login";
import "./index.css";
import Password from "./pages/changePassword/changePassword";
import { Store } from "./store";
import { Provider } from "react-redux";
import Signup from "./pages/signup/SignUp";

{/* import UserProvider, { UserContext } from "./contexts/UserContext"; */}

// dynamically import components

// TODO: check if signed in already on this line --> path "/" element={<Login />}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />}></Route>
          <Route path="/password" element={<Password />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<App />}>
            <Route path="worker"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
