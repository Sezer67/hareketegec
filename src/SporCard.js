import { useState } from "react";
import { axiosInstance } from "./login.axios.util";
import { useEffect } from "react";

const DAYS = {
  firstDay: 'firstDay',
  secondDay:"secondDay",
  thirdDay:"thirdDay",
  fourthDay:"fourthDay",
  fifthDay:"fifthDay",
  sixthDay:"sixthDay",
  seventhDay:"seventhDay"
}

// const DAYS2 = ['firstDay'];
function SporCard({ visible, setVisible, spor }) {

  // console.log("Spor: ",spor)
  const handleClose = () => {
    setVisible(false);
  };

  const renderDays = ()=>{
    Object.keys(DAYS).map(day =>(
      spor[day]
      ))
  }



useEffect(()=>{
// renderDays();
},[])

  return (
    <div className="SporModal">
      <div className="SporModalContext">
        <div className="SporModalHeader">
          <div className="SporModalHeaderTitle">
            
          </div>

          <button className="SporModalClose" onClick={handleClose}>
            Kapat
          </button>
        </div>
        <div className="SporModalBody">
          <div className="SporModelBodyLeft">
            <p>1. gun</p>
            {
            spor?.firstDay.map((firstDay,index)=>(
              
              <div
              key={firstDay.text + index}
             > 
             {firstDay.text}

            
            </div>
            
            ))
            
            }
            <br/><br/>
            <p>2. gun</p>
            {
            spor?.secondDay.map((secondDay, index)=>(
              
              <div
              key={secondDay.text + index}
             > 
             {secondDay.text}

            
            </div>
            
            ))
            
            }
            <p>3. gun</p>
            {
            spor?.thirdDay.map((thirdDay,index)=>(
              
              <div
              key={thirdDay.text + index}
             > 
             {thirdDay.text}

            
            </div>
            
            ))
            
            }
            <p>4. gun</p>
            {
            spor?.fourthDay.map((fourthDay, index)=>(
              
              <div
              key={fourthDay.text + index}
             > 
             {fourthDay.text}

            
            </div>
            
            ))
            
            }
            <p>5. gun</p>
            {
            spor?.fifthDay.map((fifthDay, index)=>(
              
              <div
              key={fifthDay.text + index}
             > 
             {fifthDay.text}

            
            </div>
            
            ))
            
            }
            <p>6. gun</p>
            {
            spor?.sixthDay.map((sixthDay, index)=>(
              
              <div
              key={sixthDay.text + index}
             > 
             {sixthDay.text}

            
            </div>
            
            ))
            
            }
            <p>7. gun</p>
            {
            spor?.seventhDay.map((seventhDay, index)=>(
              
              <div
              key={seventhDay.text + index}
             > 
             {seventhDay.text}

            
            </div>
            
            ))
            
            }
          </div>
          
          <div className="SporModelBodyRight">{spor.title}</div>
        </div>
        <div className="SporModalFooter"></div>
      </div>
    </div>
  );
}

export default SporCard;
