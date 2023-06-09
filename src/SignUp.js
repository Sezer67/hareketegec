import { FormControlLabel, RadioGroup, TextField , Radio  } from "@mui/material";
import { axiosInstance, setApiToken } from "./login.axios.util";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as storage from "./storage.helper";
import { useDispatch } from "react-redux";
import { userActions } from "./redux/slice/userslice";
import alertify from "alertifyjs";

function SignUp() {
  const kayitform = {
    fullName: "",
    email: "",
    password: "",
    gender: '0' ,
    height: "",
    weight: "",
    neck: "",
    waist: "",
    hip: "",
  };
  const [form, setForm] = useState({ ...kayitform });
  const onChangeText = (value, key) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  

  const history = useHistory();

  const dispatch = useDispatch();

  const register = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axiosInstance.post("/auth/register", {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        gender: Number(form.gender),
        height: Number(form.height),
        weight: Number(form.weight),
        neck: Number(form.neck),
        waist: Number(form.waist),
        hip: Number(form.hip)
      });
      dispatch(userActions.login(data));
      setApiToken(data.token);
      storage.setKeyWithValue("token", data.token); //Localstorge de tokenı tutmaya yarar.
      alertify.success("Kayıt Başarılı");
      history.push("/EmailVerifyInfo");
    } catch (error) {
      alertify.error(error.response.data.message);
    }
    setForm({ ...kayitform });
  };

  return (
    <div className="SignUpDiv" >
      <form className="SignUpForm"
      >
      
        <TextField
          autoFocus
          id="fullName"
          autoComplete="outlined"
          variant="outlined"
          label="Adınızı Soyadınız Giriniz"
          value={form.fullName}
          onChange={(e) => onChangeText(e.target.value, "fullName")}
        />

        <TextField
          id="email"
          autoComplete="email"
          variant="outlined"
          label="Email Giriniz"
          value={form.email}
          onChange={(e) => onChangeText(e.target.value, "email")}
        />

        <TextField
          id="password"
          autoComplete="current-password"
          type="password"
          variant="outlined"
          label="Parola Giriniz"
          value={form.password}
          onChange={(e) => onChangeText(e.target.value, "password")}
        />

        <RadioGroup value={form.gender} onChange={(e) => onChangeText(e.target.value, "gender")}>
          <FormControlLabel value="1" control={<Radio/>} label="Female" />
          <FormControlLabel value="0" control={<Radio />} label="Male" />
        </RadioGroup>

        <TextField
        type="number"
          autoFocus
          id="height"
          autoComplete="outlined"
          variant="outlined"
          label="Boyunuzu cm olarak Giriniz"
          value={form.height}
          onChange={(e) => onChangeText(e.target.value, "height")}
        />

        <TextField
        type="number"
          autoFocus
          id="weight"
          autoComplete="outlined"
          variant="outlined"
          label="Kilonuzu kg olarak Giriniz"
          value={form.weight}
          onChange={(e) => onChangeText(e.target.value, "weight")}
        />

        <TextField
          autoFocus
          type="number"
          id="neck"
          autoComplete="outlined"
          variant="outlined"
          label="Boyun Çevresini cm olarak Giriniz"
          value={form.neck}
          onChange={(e) => onChangeText(e.target.value, "neck")}
        />

        <TextField
          autoFocus
          type="number"
          id="waist"
          autoComplete="outlined"
          variant="outlined"
          label="Bel Çevrenizi cm olarak Giriniz"
          value={form.waist}
          onChange={(e) => onChangeText(e.target.value, "waist")}
        />

        <TextField
          autoFocus
          type="number"
          id="hip"
          autoComplete="outlined"
          variant="outlined"
          label="Kalça Çevrenizi cm olarak Giriniz"
          value={form.hip}
          onChange={(e) => onChangeText(e.target.value, "hip")}
        />
        <button className="SignUpButton" onClick={register}>Kayıt Ol</button>
      </form>
    </div>
  );
}

export default SignUp;
