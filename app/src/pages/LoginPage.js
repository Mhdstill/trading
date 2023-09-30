import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import { IconButton, FormControl, TextField, InputLabel, InputAdornment, OutlinedInput, Box } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/userApi';
import { AuthContext } from '../contexts/AuthContexts';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navigate = useNavigate();

    const { setAuthToken, setRefreshAuthToken, setOperationToken, setUserData, setModule } = useContext(AuthContext);
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await login(email, password);

            // Stocker les informations d'authentification dans le contexte et dans localStorage
            setAuthToken(response.token);
            setUserData(JSON.stringify({ email: response.email, role: response.role }));
            setModule(response.module);
            setOperationToken(response.operation);
            setRefreshAuthToken(response.refresh_token);

            localStorage.setItem('authToken', response.token);
            localStorage.setItem('operationToken', response.operation);
            localStorage.setItem('userData', JSON.stringify({ email: response.email, role: response.role }));
            localStorage.setItem('module', response.module);
            localStorage.setItem('refreshAuthToken', response.refresh_token);

            // Rediriger l'utilisateur vers la page souhaitée après la connexion
            navigate('/dashboard'); // Remplacez '/dashboard' par l'URL souhaitée
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            // Gérer l'erreur de connexion, par exemple, afficher un message d'erreur à l'utilisateur
        }
    }

    return (
        <>
            <Header />

            <main>
                <h1 className='py-5 text-center'> {t('login_page.title')} </h1>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='custom-card-md p-4'>
                            <TextField 
                                id="outlined-basic" 
                                label={t('email')} 
                                variant="outlined" 
                                className='w-100' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                />
                            </FormControl>
                            <div className='text-end mb-2'>
                                <button type="submit" className='custom-button-lg' onClick={handleLogin}>
                                    {t('signin')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );

}
export default LoginPage;