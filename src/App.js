import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Headers from "./components/header/Header";
import CafeDetail from "./components/cafe-detail/CafeDetail";
import Form from "./components/form/Form";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/cafes" element={<CafeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
