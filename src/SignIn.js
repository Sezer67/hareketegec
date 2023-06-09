import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { axiosInstance, setApiToken } from "./login.axios.util";
import { userActions } from "./redux/slice/userslice";
import * as storage from "./storage.helper";
import { useDispatch } from "react-redux";
import alertify from "alertifyjs";

function SignIn() {
  const initialForm = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState({ ...initialForm });
  const handleChangeText = (value, key) => {
    setForm({
      ...form,
      [key]: value,
    });
  };
  const history = useHistory();

  const handleClickKayit = () => {
    history.push("/SignUp");
  };

  const dispatch = useDispatch();

  const login = async (event) => {
    event.preventDefault();
    if (form.email.trim() === "" || form.password.trim() === "") {
      alertify.error("Bilgiler Hatalı veya Boşluk var.");
      return;
    }

    try {
      const { data } = await axiosInstance.post("/auth/login", {
        email: form.email.trim(),
        password: form.password,
      });
      dispatch(userActions.login(data)); //useractions daki login işlemini bana çağır ve dataları dispatch fonsk ile güncelle.
      setApiToken(data.token);
      storage.setKeyWithValue("token", data.token);
      history.push("/");
      alertify.success("Giriş Başarılı");
    } catch (error) {
      alertify.error(error.response.data.message);
      console.log(error);
    }
    setForm({ ...initialForm });
  };

  return (
    <div className="SignInDiv">
      <form className="SignInForm">
        <TextField
          autoFocus
          id="email"
          autoComplete="email"
          label="Email Giriniz"
          variant="outlined"
          value={form.email}
          onChange={(e) => handleChangeText(e.target.value, "email")}
        />

        <TextField
          autoFocus
          id="password"
          type="password"
          autoComplete="current-password"
          label="Parola Giriniz"
          variant="outlined"
          value={form.password}
          onChange={(e) => handleChangeText(e.target.value, "password")}
        />
        <button className="SignInButton" onClick={login}>Giriş Yap</button>
        <button className="SignInOutButton" onClick={handleClickKayit}>Kayıt Ol</button>
      </form>
    </div>
  );
}

export default SignIn;
