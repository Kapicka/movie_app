import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import MoviesPage from "./pages/MoviesPage";
import Footer from "./components/Footer";
import { useFixed } from "./fixedContext";

function App() {
  //fix the app when modal take place
  const { fixed } = useFixed();
  return (
    <BrowserRouter>
      <div className={`${fixed ? "fixed top-0 left-0 w-full" : ""} `}>
        <Navbar />
        <main className="min-h-[calc(100vh-200px)] sm:min-h-[calc(100vh-360px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
