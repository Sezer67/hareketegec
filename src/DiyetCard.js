import DiyetCardState from "./DiyetCardState";
import { useState } from "react";
import { axiosInstance } from "./login.axios.util";
import { useEffect } from "react";

function DiyetCard({visible,setVisible,diyet}) {

    const handleClose = () => {
        setVisible(false);
    }


    return ( 
    <div className="DiyetModal">  
    <div className="DiyetModalContext">
    <div className="DiyetModalHeader">
    <div className="DiyetModalHeaderTitle">
    <p>{diyet.title}</p>
    </div>

    <button className="DiyetModalClose" onClick={handleClose}>Kapat</button>

    </div>
    <div className="DiyetModalBody">
      <div className="DiyetModelBodyLeft">
      
            <p>{diyet.firstMeal[0] ? diyet.firstMeal[0].text :null}</p>
            <p>{diyet.firstMeal[1] ? diyet.firstMeal[1].text :null}</p>
            <p>{diyet.firstMeal[2] ? diyet.firstMeal[2].text :null}</p>
            <p>{diyet.firstMeal[3] ? diyet.firstMeal[3].text :null}</p>
            <p>{diyet.firstMeal[4] ? diyet.firstMeal[4].text :null}</p>
            <p>{diyet.firstMeal[5] ? diyet.firstMeal[5].text :null}</p>
            <p>{diyet.firstMeal[6] ? diyet.firstMeal[6].text :null}</p>
       
        
      </div>

      <div className="DiyetModelBodyRight">
      {diyet.description}
      </div>
  
       
    </div>
    <div className="DiyetModalFooter">
      
    </div>

    </div>

    </div>
    );
}

export default DiyetCard;