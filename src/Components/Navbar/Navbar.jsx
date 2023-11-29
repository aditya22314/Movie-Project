import React, { useEffect, useState } from "react";
import "./Navbar.css";

import DarkMode from "../../Components/DarkMode/DarkMode";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import Arabic from "../DarkMode/Arabic";
const Navbar = ({setapptog,apptog}) => { 
 
  useEffect(()=>{
  console.log(apptog);
  },[setapptog,apptog])
  return (
    <>
      <nav className={`navbar ${apptog?'active':''}`}> 
      <h1>MovieManiac</h1> 
      
      <div className="navbar_links">  
         <div className="wrapper"> 
         <DarkMode /> 
          <Arabic setapptog={setapptog} />

         </div>
         
          <a href="#popular">
           <span>Popular</span>  <img className="navbar_emoji" src={Fire} alt="" />
          </a>
          <a href="#top_rated">
           <span>Top Rated</span>  <img className="navbar_emoji" src={Star} alt="" />
          </a>
          <a href="#upcoming">
           <span> Upcoming</span>  <img className="navbar_emoji" src={Party} alt="" />
          </a>
        </div>
       
       
      </nav>
    </>
  );
};

export default Navbar;
