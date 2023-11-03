import React from "react";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/our-story" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
