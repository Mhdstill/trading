import React, { useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import btc from '../img/btc.png';

import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function SignalsPage() {
    const { t } = useTranslation();
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData(
            <>
                <img src={btc} alt="BTC" class="table-img" />
                <span className='table-coin-acron'>BTC</span>
                <span className='table-coin-name'>Bitcoin</span>
            </>,
            159,
            6.0,
            24, 4.0
        ),
        createData(
            <>
                <img src={btc} alt="BTC" class="table-img" />
                <span className='table-coin-acron'>BTC</span>
                <span className='table-coin-name'>Bitcoin</span>
            </>,
            159,
            6.0,
            24, 4.0
        ),
        createData(
            <>
                <img src={btc} alt="BTC" class="table-img" />
                <span className='table-coin-acron'>BTC</span>
                <span className='table-coin-name'>Bitcoin</span>
            </>,
            159,
            6.0,
            24, 4.0
        ),
        createData(
            <>
                <img src={btc} alt="BTC" class="table-img" />
                <span className='table-coin-acron'>BTC</span>
                <span className='table-coin-name'>Bitcoin</span>
            </>,
            159,
            6.0,
            24, 4.0
        ),
        createData(
            <>
                <img src={btc} alt="BTC" class="table-img" />
                <span className='table-coin-acron'>BTC</span>
                <span className='table-coin-name'>Bitcoin</span>
            </>,
            159,
            6.0,
            24, 4.0
        ),
    ];

    return (
        <div>
            <Header />
            <main>
                <div id='signal_page'>

                    <h1 className='pt-5 pb-4 text-center m-0'> {t('signal_page.title')} </h1>
                    <p className='h1-subtitle text-center m-0 mb-5'> {t('signal_page.subtitle')} </p>

                    <div className='bg-text-long mb-5'>
                        <div className='container d-flex align-items-center '>
                            <div className='row w-100'>
                                <div className='col-lg-4'>
                                    <h2 className='mb-2 mt-2'> {t('signal_page.text_bg')} </h2>
                                    <p className='sub-info mb-2 mt-2 me-0'> {t('signal_page.subinfo_bg')} </p>
                                </div>
                                <div className='col-lg-4 d-flex align-items-center vertical-align-middle'>
                                    <Link to="/register" className='mb-2 mt-2 custom-button-outline-transparent'>{t('register')}</Link>
                                    <Link to="/login" className='mb-2 mt-2 custom-button'>{t('signin')}</Link>
                                </div>
                                <div className='col-lg-4 d-flex align-items-center vertical-align-middle'>
                                    <Link className='sub-info-end mb-2 mt-2 me-0'>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='me-2' style={{fontSize: '1rem'}} />
                                        {t('terms_conditions')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" className='mt-0 p-0 container'>
                        <Tab label={t('all')} />
                        <Tab label={t('futur')} />
                        <Tab label={t('spot')} />
                        <Tab label={t('private')} />
                        <Tab label={t('public')} />
                    </Tabs>

                    <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='container'>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="table-header-cell"> {t('name')} </TableCell>
                                    <TableCell align="right" className="table-header-cell"> {t('name')} </TableCell>
                                    <TableCell align="right" className="table-header-cell"> {t('name')} </TableCell>
                                    <TableCell align="right" className="table-header-cell"> {t('name')} </TableCell>
                                    <TableCell align="right" className="table-header-cell">{t('name')}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                    //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" className="table-cell">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right" className="table-cell">{row.calories}</TableCell>
                                        <TableCell align="right" className="table-cell">{row.fat}</TableCell>
                                        <TableCell align="right" className="table-cell">{row.carbs}</TableCell>
                                        <TableCell align="right" className="table-cell">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </main>
        </div>
    );

}
export default SignalsPage;