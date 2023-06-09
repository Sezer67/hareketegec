import * as React from "react";
import Test from "./Test";
import Test2 from "./Test2";
import { useState,useEffect } from "react";


const test = [
    {
        id:1,
        title:"Yağ Oranı Testi"
    },
    {
        id:2,
        title:"Vücut Kitle İndeksi Testi"
    },
];

function Deneme() {
    
    const [visibleYag, setVisibleYag] = useState(false); // modalın görünülebilirliği
    const [visibleVki, setVisibleVki] = useState(false); // modalın görünülebilirliği
     


    const handleClickYag = () => {
    setVisibleYag(true);
    }

    const handleClickVki = () => {
    setVisibleVki(true);
    }
    return ( 
        <div className="Home">
            

            <div className="HomeRightTest">
            <button onClick={() => handleClickYag(test.id)}>Yağ Oranı Testi</button>
            </div>
            <div className="HomeLeftTest">
            <button onClick={() => handleClickVki(test.id)}>Vücut Kitle İndeksi</button>
            </div>
           { 
                visibleYag &&   <Test visibleYag={visibleYag} setVisibleYag={setVisibleYag} />
           }
           { 
                visibleVki &&   <Test2 visibleVki={visibleVki} setVisibleVki={setVisibleVki}/>
           }
        </div>
        
    );
}

export default Deneme;

