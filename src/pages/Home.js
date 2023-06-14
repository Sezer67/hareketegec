import * as React from "react";
import { useState } from "react";
import VkiModal from "../components/VkiModal";
import FatRateModal from "../components/FatRateModal";

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

function Home() {
    
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
                visibleYag &&   <FatRateModal visible={visibleYag} setVisible={setVisibleYag} />
           }
           { 
                visibleVki &&   <VkiModal visible={visibleVki} setVisible={setVisibleVki}/>
           }
        </div>
        
    );
}

export default Home;

