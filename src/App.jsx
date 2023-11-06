import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import MovieList from "./Components/Movie List/MovieList";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <MovieList />
      </div>
    </>
  );
}

export default App;
