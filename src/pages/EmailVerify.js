import { axiosInstance, setApiToken } from "../login.axios.util";
import { useHistory, useLocation } from "react-router-dom";
import * as storage from "../storage.helper";
import { useEffect } from "react";

function EmailVerify() {
  const location = useLocation();
  const history = useHistory();

  const emailDeneme = async () => {
    try {
      const { data } = await axiosInstance.post("/user/email-verify");
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    setApiToken("");
    storage.setKeyWithValue("token", "");
    const token = location.search.split("=")[1];
    if (token) {
      setApiToken(token);
      emailDeneme();
    } else {
      history.push("/");
    }
    
    
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Başarıyla Kayıt Olundu.</p>
    </div>
  );
}

export default EmailVerify;
