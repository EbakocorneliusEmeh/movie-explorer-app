import React from "react";
import "./App.css";
import DetailPage from "./pages/Detailpage";
import HomePage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router";
import { MoveData } from "./Context/move";

function App() {
  return (
    <MoveData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </MoveData>
  );
}

export default App;
