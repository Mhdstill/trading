import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import { IconButton, FormControl, TextField, InputLabel, InputAdornment, OutlinedInput, Box, Button } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/userApi'; // Importez la fonction register depuis votre API

function RegisterPage() {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await register(email, password);
            console.log('Inscription réussie :', response);
            navigate('/');
        } catch (error) {
            console.error('Erreur lors de l\'inscription :', error);
        }
    };

    return (
        <>
            <Header />

            <main>
                <h1 className='py-5 text-center'> {t('register_page.title')} </h1>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='custom-card-md p-4'>
                            <form onSubmit={handleRegister}>
                                <TextField
                                    id="outlined-basic"
                                    label={t('email')}
                                    variant="outlined"
                                    className='w-100'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <FormControl variant="outlined" className='w-100 mt-4 my-5'>
                                    <InputLabel htmlFor="outlined-adornment-password"> {t('password')} </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                        required
                                    />
                                </FormControl>
                                <div className='text-end mb-2'>

                                </div>
                            </form>
                            <div className='text-end mb-2'>
                                <button type="submit" className='custom-button-lg' onClick={handleRegister}>
                                    {t('register')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default RegisterPage;