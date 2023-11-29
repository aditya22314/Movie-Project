import React, { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import MovieList from "./Components/Movie List/MovieList";
// import Arabic from "./Components/DarkMode/Arabic"; 
import Fire from './assets/fire.png' 
import Star from './assets/glowing-star.png' 
import Party from './assets/partying-face.png'

function App() {  

  const [apptog, setapptog] = useState(false) 
  useEffect(()=>{
    console.log(apptog)
  },[apptog])
  return (
    <>
     <div className="app">
        <Navbar setapptog={setapptog} apptog={apptog} />
        <MovieList  apptog={apptog} setapptog={setapptog} type="popular" title="Popular" emoji={Fire} />
        <MovieList  apptog={apptog} setapptog={setapptog} type="top_rated" title="Top Rated" emoji={Star} />
      </div>  
        <MovieList  apptog={apptog} setapptog={setapptog} type="upcoming" title="Upcoming" emoji={Party} />
      {/* <Arabic/> */}
    </>
  );
}

export default App;
