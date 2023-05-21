import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



export default function ParolaSifirlama() {

    return (
        <div>
            <Box
                sx={{
                    mt: 25,
                    ml: 62,
                    width: 500,
                    maxWidth: '100%',
                    height: '60vh'
                    
                }}
            >
                <Typography variant='h6' sx={{ mb: 2}} >Şifremi Unuttum</Typography>
                <TextField fullWidth label="E-postanızı Girin" id="fullWidth" />
                <Button variant="contained" color='primary' sx={{ mt: 5, width: '500px' }} >
                    Şifreyi Sıfırla
                </Button>
                <Typography variant='h11'>Veya oturum aç
                <Link to='/Signin' variant="body2">Giriş yap</Link>
                </Typography>
            </Box>
        </div>
    )
}
