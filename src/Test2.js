import * as React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { Input } from "@mui/material";

const vkiform = [
  {
    height:null,
    weight:null,
  }
] ;

function Test2({visibleVki,setVisibleVki}) {
    

  const [vkiForm, setVkiForm] = useState({...vkiform});
  const handleSliderChange = (event, newValue) => {
    setVkiForm({
      ...vkiForm,
      [newValue]:event,
      
    })
    };


    const handleClose = () => {
        setVisibleVki(false);
      };

      const [value, setValue] = React.useState();

      
    
      const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
      };
    
      const handleBlur = () => {
        if (value < 0) {
          setValue(0);
        } else if (value > 100) {
          setValue(100);
        }
      };

      const handleHesap=()=>{

      }

    return ( 
        <div className="TestModal">
        <div className="TestModalContext">
          <div className="TestModalHeader">
            <div className="TestModalHeaderTitle">
              
            </div>
  
            <button className="TestModalClose" onClick={handleClose}>
              Kapat
            </button>
          </div>
          <div className="TestModalBody">
           <div>
           <Box sx={{ width: 500 }}>
      <Typography id="input-slider" gutterBottom>
       Boy
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
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
        <Grid item>
          
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
              </Box>
           </div>
          </div>
          <div className="TestModalFooter">
          <button onClick={handleHesap}>Hesapla</button>
          </div>
        </div>
      </div>
     );
}

export default Test2;