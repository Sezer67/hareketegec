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
import { axiosInstance } from './login.axios.util';
import DiyetCard from './DiyetCard';

const tiers = [
  {
        id:1,
        title: 'Diyet 1',
        description: [
            'Yağ Oranı %0-6 arası'
        ],
        buttonText: 'Tıkla',
        buttonVariant: 'outlined',
    },
  {
    id:2,
    title: 'Diyet 2',
    description: [
        'Yağ Oranı %6-13 arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
  {
    id:3,
    title: 'Diyet 3',
    description: [
        'Yağ Oranı %14-17 arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
  {
    id:4,
    title: 'Diyet 4',
    description: [
        'Yağ Oranı %18-24 arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
  {
    id:5,
    title: 'Diyet 5',
    description: [
        'Yağ Oranı %25-37 arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
  {
    id:6,
    title: 'Diyet 6',
    description: [
        'Yağ Oranı %38 ve üstü arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
 
];



function PricingContent() {

  const [diyetList,setDiyetList]=useState([]);//Tüm Kartların listesini tutmak için
  const [selected ,setSelected]=React.useState();//Seçili kartı tutmak için
  const [visible,setVisible]=useState(false);//modalın görünebilirliği

  const getDiyetList = async()=>{
    try {
      const {data} = await axiosInstance.get(`/diet-list`);
      setDiyetList(data);
    } catch (error) {
      console.log("error",error);
    }
  }

  useEffect(()=>{
    getDiyetList();
  },[])

  const handleClick= (id) => {
    const selectedDiyet = diyetList.filter((diyet) => diyet.id === id)[0];
    setSelected(selectedDiyet);
    setVisible(true);
  }

  return (
    <React.Fragment>
      <div style={{backgroundImage:`url("https://images.unsplash.com/photo-1604480132715-bd70038b74df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=918&q=80")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
     
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Harekete Geç
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        Spor, disiplin, azim ve kararlılık gerektiren bir aktivitedir. Her gün veya düzenli aralıklarla yaptığınız spora ayırdığınız zaman ve enerjiyi bulmak için, zaman zaman manevi desteğe ihtiyaç duyabilirsiniz. 
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {diyetList.map((tier) => (
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
        visible && <DiyetCard visible={visible} setVisible={setVisible} diyet={selected} />
      }
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}