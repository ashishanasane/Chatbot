import React from 'react';
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'; 
import LoginReg from './LoginReg';
import LoginUi from './LoginUi';
import Forgetpass from './forgetpassword';
import HomePage from './Homepage';

function App(){
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/" element={<LoginUi/>}/>
        <Route path="/register" element={<LoginReg/>}/>
        <Route path="/forget" element={<Forgetpass/>}/>
    </Routes>
    </BrowserRouter>
    </>
    );
    
}

export default App;