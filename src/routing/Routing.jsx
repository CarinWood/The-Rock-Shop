import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home/Home'
import SignIn from '../pages/signin/SignIn';
import SignedIn from '../pages/signedin/SignedIn';

const Routing = (props) => {
  return (
  <>
    <BrowserRouter>
        {props.children}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/signed-in" element={<SignedIn/>} />
        </Routes>
    </BrowserRouter>
  </>
  )
};

export default Routing;
