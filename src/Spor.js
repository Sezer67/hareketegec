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
//import Link  from "@mui/material/Link";
import {Link}  from "react-router-dom";


const tiers = [
  {
        title: 'Spor Programı 1',
        description: [
            'Yağ Oranı %0-6 arası'
        ],
        buttonText: 'Tıkla',
        buttonVariant: 'outlined',
    },
  {
    title: 'Spor Programı 2',
    description: [
        'Yağ Oranı %6-13 arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
  {
    title: 'Spor Programı 3',
    description: [
        'Yağ Oranı %14-17 arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
  {
    title: 'Spor Programı 4',
    description: [
        'Yağ Oranı %18-24 arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
  {
    title: 'Spor Programı 5',
    description: [
        'Yağ Oranı %25-37 arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
  {
    title: 'Spor Programı 6',
    description: [
        'Yağ Oranı %38 ve üstü arası'
    ],
    buttonText: 'Tıkla',
    buttonVariant: 'outlined',
  },
 
];



function PricingContent() {
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
          {tiers.map((tier) => (
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
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                  <Link to='/Signin' style={{textDecoration:'none', color:'skyblue'}}> {tier.buttonText}</Link>
                   
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
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}