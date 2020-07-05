import "bootstrap/dist/css/bootstrap-grid.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./App.css";
import React from "react";
import {BrowserRouter} from "react-router-dom";

import Routes from "./Routes";
import Logo from "../components/template/Logo";
import Navigation from "../components/template/Navigation";
import Footer from "../components/template/Footer";

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Navigation/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>