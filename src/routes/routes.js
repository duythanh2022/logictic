import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home'
import Login from '@/pages/Login';
const Routers = ()=>{
 return(
    <>
    <Router>
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="login"  component={Login} /> 
        </Routes>
    </Router>
    </>
 )
}
export default Routers