import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {SuperForm} from "../components/form/SuperForm";
import {Tickets} from "../components/tickets/Tickets";

export const RoutesPages = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/avia'}/>}/>
                <Route path='/avia' element={<SuperForm/>}/>
                <Route path='/avia/info' element={<Tickets/>}/>
                <Route path='/404' element={<h1>404 not found</h1>}/>
                <Route path='*' element={<Navigate to={'/404'}/>}/>
            </Routes>
        </>
    );
};
