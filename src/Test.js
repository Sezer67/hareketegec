import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import GenderMale from "@mui/icons-material/Man2";
import GenderFemale from "@mui/icons-material/Woman";
import { Input } from "@mui/material";
import { axiosInstance } from "./login.axios.util";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function Test({ visibleYag, setVisibleYag }) {
  const yagform = {
    yas: 0,
    boy: 0,
    kilo: 0,
    boyun: 0,
    bel: 0,
    kalca: 0,
    cinsiyet: 0,
  };

  const [yagForm, setYagForm] = useState({ ...yagform });
  const [value, setValue] = React.useState();
  const [fatTest, setFatTest] = useState([]);
  const handleInputChange = (value, key) => {
    setYagForm({
      ...yagForm,
      [key]: value,
    });
  };

  const getYagList = async () => {
    try {
      const { data } = await axiosInstance.post(`/test/fat-rate`);
      getYagList(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getYagList();
  }, []);

  const handleClose = () => {
    setVisibleYag(false);
  };

  const handleSliderChange = (value, key) => {
    setYagForm();
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const NavbarIconButtonMale = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const NavbarIconButtonFemale = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const handleHesap = async () => {
    try {
      const { data } = await axiosInstance.post(`test/fat-rate`, {
        age: Number(yagForm.yas),
        height: Number(yagForm.boy),
        weight: Number(yagForm.kilo),
        neck: Number(yagForm.boyun),
        waist: Number(yagForm.bel),
        hip: Number(yagForm.kalca),
        gender: 0,
      });
      setFatTest(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="TestModal">
      <div className="TestModalContext">
        <div className="TestModalHeader">
          <div className="TestModalHeaderTitle"></div>

          <button className="TestModalClose" onClick={handleClose}>
            Kapat
          </button>
        </div>

        <div className="TestModalIcon">
          <div className="TestModalIconMale">
            <button onClick={NavbarIconButtonMale}>
              <GenderMale className="IconMale" />
            </button>
          </div>

          <div className="TestModalIconFemale">
            <button onClick={NavbarIconButtonFemale}>
              {" "}
              <GenderFemale className="IconFemale" />
            </button>
          </div>
        </div>
        <div className="GenderCheckbox">
          <FormControl>
            <RadioGroup defaultValue="0"> 
              <FormControlLabel value="1" control={<Radio />} label="Female" />
              <FormControlLabel value="0" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="TestModalBody">
          <div>
            <Box sx={{ width: 500 }}>
              <Typography id="input-slider" gutterBottom>
                Yaş
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item></Grid>
                <Grid item xs>
                  <Slider // debounce yaz
                    value={yagForm.yas}
                    onChange={(e) => handleInputChange(e.target.value, "yas")}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={yagForm.yas}
                    size="small"
                    onChange={(e) => handleInputChange(e.target.value, "yas")}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            {console.log(yagForm.yas)}
            <Box sx={{ width: 500 }}>
              <Typography id="input-slider" gutterBottom>
                Boy
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item></Grid>
                <Grid item xs>
                  <Slider
                    value={yagForm.boy}
                    onChange={(e) => handleInputChange(e.target.value, "boy")}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={yagForm.boy}
                    size="small"
                    onChange={(e) => handleInputChange(e.target.value, "boy")}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ width: 500 }}>
              <Typography id="input-slider" gutterBottom>
                Kilo
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item></Grid>
                <Grid item xs>
                  <Slider
                    value={yagForm.kilo}
                    onChange={(e) => handleInputChange(e.target.value, "kilo")}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={yagForm.kilo}
                    size="small"
                    onChange={(e) => handleInputChange(e.target.value, "kilo")}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ width: 500 }}>
              <Typography id="input-slider" gutterBottom>
                Boyun çevresi
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item></Grid>
                <Grid item xs>
                  <Slider
                    value={yagForm.boyun}
                    onChange={(e) => handleInputChange(e.target.value, "boyun")}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={yagForm.boyun}
                    size="small"
                    onChange={(e) => handleInputChange(e.target.value, "boyun")}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ width: 500 }}>
              <Typography id="input-slider" gutterBottom>
                Bel çevresi
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item></Grid>
                <Grid item xs>
                  <Slider
                    value={yagForm.bel}
                    onChange={(e) => handleInputChange(e.target.value, "bel")}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={yagForm.bel}
                    size="small"
                    onChange={(e) => handleInputChange(e.target.value, "bel")}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ width: 500 }}>
              <Typography id="input-slider" gutterBottom>
                Kalça çevresi
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item></Grid>
                <Grid item xs>
                  <Slider
                    value={yagForm.kalca}
                    onChange={(e) => handleInputChange(e.target.value, "kalca")}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={yagForm.kalca}
                    size="small"
                    onChange={(e) => handleInputChange(e.target.value, "kalca")}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>

        <div>
          <p>
            {fatTest.result}
            {fatTest.description}
          </p>
        </div>
        <div className="TestModalFooter">
          <button onClick={handleHesap}>Hesapla</button>
        </div>
      </div>
    </div>
  );
}

export default Test;
