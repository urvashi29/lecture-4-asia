import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Employee from "./Component/Employee";
import Post from './Component/Post';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Navbar />

            {/* react-router-dom - 5 */}
            {/* <Route path='/home' component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} /> */}

            {/* react-router-dom - 6 */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/employee/:user_id' element={<Post />} />
            </Routes>

            {/* <Footer /> */}
        </BrowserRouter>

    )
}

export default RouterApp;

// Router.js