import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import { IconButton, FormControl, TextField, InputLabel, InputAdornment, OutlinedInput, Box } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Header />

            <main>
                <h1 className='py-5 text-center'> {t('register_page.title')} </h1>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='custom-card-md p-4'>
                            <TextField id="outlined-basic" label={t('email')} variant="outlined" className='w-100' />
                            <FormControl variant="outlined" className='w-100 mt-4 my-5'>
                                <InputLabel htmlFor="outlined-adornment-password"> {t('password')} </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
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
                                />
                            </FormControl>
                            <div className='text-end mb-2'>
                                <Link to="/signin" className='custom-button-lg'>{t('signin')}</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );

}
export default RegisterPage;