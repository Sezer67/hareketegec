import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import alertify from 'alertifyjs';
import { axiosInstance } from '../login.axios.util';



const names = [
    'Yanlış Bilgi',
    'Yanlış Diyet',
    'Yanlış Spor',
    'Spam veya taklit Hesap',
    'Diğerleri'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 450,
        },
    },
};


export default function Iletisim() {

    const [name, setName] = React.useState();
    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const [surname, setSurname] = React.useState();
    const handleChangeSurname = (event) => {
        setSurname(event.target.value);
    };

    const [mail, setMail] = React.useState();
    const handleChangeMail = (event) => {
        setMail(event.target.value);
    };

    const [telefon, setTelefon] = React.useState();
    const handleChangeTelefon = (event) => {
        setTelefon(event.target.value);
    };

    const [mesaj, setMesaj] = React.useState();
    const handleChangeMesaj = (event) => {
        setMesaj(event.target.value);
    };

    const [personName, setPersonName] = React.useState([]);

    const handleChangeDialog = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSend = async() => {
        try {
            const {data} = await axiosInstance.post('/user/contact', {
                fullName: name.concat(" ",surname),
                email: mail,
                phone: telefon,
                description: mesaj,
                subject: personName.join(" "),
            });
            alertify.success("Mesajınız Alındı.")
        } catch (error) {
            alertify.error(error.response.data.message);
        }
    }

    return (
        <Container component="main" sx={{ mt: 10, mb: 30, mr: 4 }} maxWidth="lg">
            <Typography variant="h1" component="h1" gutterBottom sx={{ color: 'rgb(0, 0, 255)' }}>
                Bize Ulaşın
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom sx={{ mb: 5 }}>
                Tüm soru, görüş ve merak ettiğiniz diğer konular için form doldurabilir ve mesaj gönderebilirsiniz
            </Typography>
            <Typography variant="body1">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-name"
                        type='text'
                        label="Adınızı Girin"
                        value={name}
                        onChange={handleChangeName}
                        required
                    />
                    <TextField
                        id="outlined-name"
                        type='text'
                        label="Soyadınızı Girin"
                        value={surname}
                        onChange={handleChangeSurname}
                        required
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-name"
                        type='email'
                        label="Email Adresinizi Girin"
                        value={mail}
                        onChange={handleChangeMail}
                        required
                    />
                    <TextField
                        id="outlined-name"
                        type='tel'
                        label="Telefon Girin"
                        value={telefon}
                        onChange={handleChangeTelefon}
                        required
                    />
                </Box>

                <FormControl sx={{ m: 1, width: 905 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Konu Seçiniz...</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChangeDialog}
                        input={<OutlinedInput label="Konu Seçiniz..." />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={personName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Typography>
            <Box
                component="form"
                sx={{
                    '.MuiTextField-root': { m: 1, width: '102ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-name"
                    type='text'
                    label="Mesaj Yazınız"
                    multiline
                    maxRows={10}
                    value={mesaj}
                    onChange={handleChangeMesaj}
                    required
                />

            </Box>

            <Stack direction="row" spacing={2}>
                <Button onClick={handleSend} variant="contained" color='warning' type='submit' endIcon={<SendIcon />} sx={{ width: '250px', backgroundColor: 'rgb(0, 0, 255)', color: 'white', mt: 5, ml: 1 }}>
                    Gönder
                </Button>
            </Stack>


        </Container>

    );
}

