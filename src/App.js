import React from "react";
import Navbar from './Navbar';
import Iletisim from "./pages/Iletisim";
import Spor from './pages/Spor';
import Diyet from './pages/Diyet';
import Blog from './pages/Blog';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignUp from './pages/SignUp';
import SignIn from "./pages/SignIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as storage from './storage.helper'
import { axiosInstance, setApiToken } from './login.axios.util';
import { userActions } from './redux/slice/userslice';
import EmailVerify from "./pages/EmailVerify";
import EmailVerifyInfo from "./pages/EmailVerifyInfo";
import Home from "./pages/Home";
import "./App.css";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const getCurrentUser = async () => {
    const token = storage.getValueByKey("token");
    if (token) {
        setApiToken(token);
        try {
            const { data } = await axiosInstance.get('/user/me');
            dispatch(userActions.login({ user: data, token }))
        } catch (error) {
            console.log(error);
        }
    }
}

  useEffect(() => {

    if (!userState.isAuth) getCurrentUser();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [userState.isAuth])


  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SignIn" component={SignIn} /> 
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Iletisim" component={Iletisim} /> 
        <Route path="/Spor" component={Spor} /> 
        <Route path="/Diyet" component={Diyet} /> 
        <Route path="/KcalCalculator" component={Blog} /> 
        <Route path="/EmailVerify" component={EmailVerify}/>
        <Route path="/EmailVerifyInfo" component={EmailVerifyInfo}/>
        <Route path="/Profile" component={Profile} />
      </Switch>
      
    </BrowserRouter>
  );
  } 

  export default App;