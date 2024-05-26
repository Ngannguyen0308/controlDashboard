import React from "react";
import "./MainContainer.css";
import iBanner from "../img/3dIll.jpg";
import BoxTempt from "./BoxTempt";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
        >
          <div className="ImgBanner">
            <img src={iBanner}/>
          </div>
          
          <div className="textContainer">
            <h1>Welcome to WSS</h1>
            <h2>Real value</h2>
            <p>Loading...</p>
          </div>
        </div>

        <div className="cards">
          <BoxTempt/>
        </div>
      
      </div>
    </div>
  );
}

export default MainContainer;
