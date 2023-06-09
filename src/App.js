import React from "react";
import Navbar from './Navbar';
import Iletisim from "./Iletisim";
import ParolaSifirlama from "./ParolaSifirlama";
import Spor from './Spor';
import Diyet from './Diyet';
import Home from './Home';
import Blog from './Blog';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignUp from './SignUp';
import SignIn from "./SignIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as storage from './storage.helper'
import { axiosInstance, setApiToken } from './login.axios.util';
import { userActions } from './redux/slice/userslice';
import EmailVerify from "./EmailVerify";
import EmailVerifyInfo from "./EmailVerifyInfo";
import SporCard from "./SporCard";
import SporCardState from "./SporCardState";
import DiyetCard from "./DiyetCard";
import DiyetCardState from "./DiyetCardState";
import Deneme from "./Deneme";
import Test from "./Test";
import Test2 from "./Test2";
import "./App.css";

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

}, [userState.isAuth])


  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route exact path="/SignIn" component={SignIn} /> 
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Iletisim" component={Iletisim} /> 
        <Route exact path="/ParolaSifirlama" component={ParolaSifirlama} /> 
        <Route exact path="/Spor" component={Spor} /> 
        <Route exact path="/Diyet" component={Diyet} /> 
        <Route exact path="/Blog" component={Blog} /> 
        <Route exact path="/EmailVerify" component={EmailVerify}/>
        <Route exact path="/EmailVerifyInfo" component={EmailVerifyInfo}/>
        <Route exact path="/SporCard" component={SporCard}/>
        <Route exact path="/SporCardState" component={SporCardState}/>
        <Route exact path="/DiyetCard" component={DiyetCard}/>
        <Route exact path="/DiyetCardState" component={DiyetCardState}/>
        <Route exact path="/Deneme" component={Deneme}/>
        <Route exact path="/Test" component={Test}/>
        <Route exact path="/Test2" component={Test2}/>
      </Switch>
      
    </BrowserRouter>
  );
  } 

  export default App;