import React, { useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../components/Header';

function Dashboard() {
  return (
    <div>
        <Header />
        <main>
            <h1>Dashboard</h1>
        </main>
    </div>
  );

}
export default Dashboard;