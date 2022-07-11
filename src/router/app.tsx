import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from '../view/login-page/login';
import { Main } from '../view/main-page/main';



export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/" element={<Navigate replace to="/login" />} />
                </Routes>
            </BrowserRouter>



        </div>
    )
}
