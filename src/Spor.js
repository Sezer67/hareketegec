import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import { useEffect,useState } from 'react';
import { axiosInstance } from "./login.axios.util";
import SporCard from './SporCard';




const tiers = [
  {
        id:1,
        title: 'Hacim Kazanma',
        description: [
            'Kas kütlesi ve vücut ağırlığı kazanmak isteyenler için '
        ],
        buttonText: 'Göster',
        
        buttonVariant: 'outlined',
    },
  {
    id:2,
    title: 'Yağ Yakma ',
    description: [
        'Yağ oranı yüksek ve define olamak için'
    ],
    buttonText: 'Göster',
    
    buttonVariant: 'outlined',
  },
  {
    id:3,
    title: 'Performans Güç',
    description: [
        'Spor geçmişi olan ve aktif sporcular için'
    ],
    buttonText: 'Göster',
    
    buttonVariant: 'outlined',
  },
  {
    id:4,
    title: 'Fit Olma',
    description: [
        'Vücut kütlesini ve yağ oranını düşürmek için'
    ],
    buttonText: 'Göster',
    
    buttonVariant: 'outlined',
  },
  {
    id:5,
    title: 'Sağlıklı Yaşam',
    description: [
        'Vücut kütlesi ve yağ oranı kütle indeksine göre koruma'
    ],
    buttonText: 'Göster',
    
    buttonVariant: 'outlined',
  },
  {
    id:6,
    title: 'Eklem Sağlığı',
    description: [
        'Yüksek yaş sahibi ve eklem rahatsızlığı olanlar için'
    ],
    buttonText: 'Göster',
   
    buttonVariant: 'outlined',
  },
 
];

  

function PricingContent() {
  const [sporList,setSporList] = useState([]); // tüm kartlaraın listesini tutmak için
  const [selected, setSelected] = useState(); // sadece seçili olan kartı tutmak için
  const [visible, setVisible] = useState(false); // modalın görünülebilirliği

  const getSporList = async () => {
    try {
        const {data} = await axiosInstance.get(`/spor-list`);
        setSporList(data); 
    } catch (error) {
        console.log("error",error);
    }
  }

  useEffect(() => {
    getSporList();
  },[])

  const handleClick= (id) => {
    const selectedSpor = sporList.filter((spor) => spor.id === id)[0];
    setSelected(selectedSpor);
    setVisible(true);
  }




  return (
    <React.Fragment>
      <div style={{backgroundImage:`url("https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
     
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }} >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="white"
          gutterBottom
        >
          Harekete Geç
        </Typography>
        <Typography variant="h5" align="center" color="white" component="p">
        Spor, disiplin, azim ve kararlılık gerektiren bir aktivitedir. Her gün veya düzenli aralıklarla yaptığınız spora ayırdığınız zaman ve enerjiyi bulmak için, zaman zaman manevi desteğe ihtiyaç duyabilirsiniz. 
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {sporList.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                   
                    <Typography variant="h6" color="text.secondary">
                      
                    </Typography>
                  </Box>
                  <ul>
                    {tier.cardDescription || tier.description}
                  </ul>
                </CardContent>
                
                <CardActions>
                  <Button onClick={() => handleClick(tier.id)} fullWidth variant="outlined">
                    
                  <span  style={{textDecoration:'none', color:'skyblue'}}>GÖRÜNTÜLE</span>
                   </Button>


                  
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
        
        </Grid>
       
      </Container>
      {/* End footer */}
      </div>
      {
        visible && <SporCard visible={visible} setVisible={setVisible} spor={selected} />
      }
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}