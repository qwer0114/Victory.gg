import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Summoner from "./Components/Summoner";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/summoner/:name" element={<Summoner></Summoner>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
