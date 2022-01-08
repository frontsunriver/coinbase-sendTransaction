import React from "react";
import Header from '../component/header';
import Footer from '../component/footer';
import Home from './home';

export default function Layout(props) {
    console.log(props);
    return(
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}