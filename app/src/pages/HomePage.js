import React, { useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../components/Header';

function HomePage() {
  return (
    <div>
        <Header />
        <main>
            <h1>HOME</h1>
        </main>
    </div>
  );

}
export default HomePage;