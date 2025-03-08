import React from "react";
import { Routes, Route } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipesPage />} />
    </Routes>
  );
}

export default App;
