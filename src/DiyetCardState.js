
function DiyetCardState(props) {
    const{DiyetCardList} = props;
    return ( 
       <div style={{
        width:"200px",
    height:"200px",
    color:"black",
    alignItems:"center",
    display:"flex",
        
    }}>
        {DiyetCardList.title}
       </div> 
     );
}

export default DiyetCardState;