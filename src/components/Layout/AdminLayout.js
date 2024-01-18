import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Pages/Admin/Sidebar/Sidebar';

export function AdminLayout(props) {



    return (
        <>
            <Header />
            <main style={{ minHeight: "80vh", display: "flex" }}>
                <Sidebar/>
                <Outlet />
                
            </main>
            
        </>
    );
}


