import React from 'react';
import s from './App.module.scss';
import {RoutesPages} from "../common/routes/Routes";

function App() {

    return (
        <>
            <div className={s.container}>
                <RoutesPages/>
            </div>
        </>
    );
}

export default App;
