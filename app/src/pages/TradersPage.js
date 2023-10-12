import React, { useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import logo from '../logo192.png';
import StarRating from '../components/StarRating';
import ActionBar from '../components/ActionBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TradersPage() {
    const { t } = useTranslation();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Header />
            <main>
                <div className='container' id='trading_page'>
                    <ActionBar />

                    <h1 className='pt-5 pb-4 text-center m-0'> {t('trader_page.title')} </h1>
                    <p className='h1-subtitle text-center m-0 pb-5'> {t('trader_page.subtitle')} </p>

                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered className='mt-0 mb-4'>
                        <Tab label={t('popular')} />
                        <Tab label={t('recent')} />
                    </Tabs>

                    <div className='mt-5'>
                        <div className='row mb-5'>
                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div className='row mb-5'>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div className='row mb-5'>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='custom-card w-100 p-4'>
                                    <div className='mx-auto text-center mb-2'>
                                        <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/wgipmxrkqfnmdderwfeszkcm45ac" className="App-logo round-img" alt="logo" height="70" />
                                    </div>
                                    <p className='custom-card-title'>
                                        <StarRating rating={3.5} color='green' />
                                        Hugo Battoue
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );

}
export default TradersPage;