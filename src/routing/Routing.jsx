import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home/Home'

const Routing = (props) => {
  return (
  <>
    <BrowserRouter>
        {props.children}
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  </>
  )
};

export default Routing;
