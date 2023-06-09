import * as React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./redux/slice/userslice";
import * as storage from "./storage.helper";
import Mako from '@mui/icons-material/VolunteerActivism';

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector((state) => state.user);

  const handlelogin = () => {
    history.push("/SignIn");
  };
  const handlelogout = () => {
    dispatch(userActions.logout());
    storage.setKeyWithValue("token", "");
    history.push("/");
  };

  const iletisim = () => {
    history.push("/Iletisim");
  };

  const spor = () => {
    history.push("/Spor");
  };

  const diyet = () => {
    history.push("/Diyet");
  };
  const blog = () => {
    history.push("/Blog");
  };
  const NavbarIconButton = () =>{
    history.push("/");
  }
  const deneme = () =>{
    history.push("/Deneme");
  }
  return (
    <div className="NavbarDiv">
      
      <div className="NavbarIcon">
         <button onClick={NavbarIconButton}> <Mako/> Harekete Geç</button> 

      </div>

      <div className="NavbarList">
        <button className="NavbarListButton" onClick={iletisim}>İLETİŞİM</button>
        <button className="NavbarListButton" onClick={spor}>SPOR</button>
        <button className="NavbarListButton" onClick={diyet}>DİYET</button>
        <button className="NavbarListButton" onClick={blog}>BLOG</button>
        <button className="NavbarListButton" onClick={deneme}>DENEME</button>
      </div>

      <div className="NavbarSign">
        {userState.isAuth ? (
          <button className="NavbarLog" onClick={handlelogout}>Çıkış Yap</button>
        ) : (
          <button className="NavbarLog" onClick={handlelogin}>Giriş Yap</button>
        )}
      </div>
    </div>
  );
}
export default Navbar;
