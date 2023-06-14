
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
name:"user",
initialState:{
    isAuth:false,
    user:{
        id:"",
        fullName:"",
        email:"",
        password:"",
        gender:"",
        height:"",
        weight:"",
        neck:"",
        waist:"",
        hip:"",
        
    },
    token:"",
},
reducers:{
    login:(state,action) =>{
        state.user={...action.payload.user};
        state.isAuth=true;
        state.token=action.payload.token;
      
    },
    logout:(state)=>{
        state.user={
        id:"",
        fullName:"",
        email:"",
        password:"",
        
        };

        state.isAuth=false;
        state.token="";
        
    },
    setUser: (state, action) => {
        state.user = {...action.payload};
    }
    
}
});

export const userActions = userSlice.actions;   //actions redux state'ini değiştirmek için kullandığımız fonksiyonlardır.Bu Fonksiyona gönderdiğimiz parametreler action payload içersinde tuıtulur.
export default userSlice.reducer;   //sadece store için çalışıyor.Userslice'ı çağırdığımız yerde reducerı çağırmıs oluruz.