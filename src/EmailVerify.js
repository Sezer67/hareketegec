import { useEffect } from "react";
import { axiosInstance, setApiToken } from "./axios.util";
import * as storage from "./storage.helper";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function EmailVerify() {
  const location = useLocation();
  const history = useHistory();
  
  useEffect(() => {
    setApiToken("");
    storage.setKeyWithValue("token", "");
    const token = location.search.split("=")[1];
    if(token){
      setApiToken(token);
    }
    else{
      history.push("/");
    }
  }, []);
  
  const emailDeneme = async() => {
    try {
    await axiosInstance.post("/user/email-verify");

    } 
    catch (error) {
      console.log(error);
    }
  }

  const handleClick=()=>{
    history.push("/SignIn");
  }

  return(
    <div>
      <p>Email başarılı bir şekilde onaylandı.</p>
      <button onClick={handleClick}>
        Giriş Yap.
      </button>
    </div>
    
  ) 
}

export default EmailVerify;
