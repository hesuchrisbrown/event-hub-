import React from 'react'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main />
            <Footer />
        </div>


    )
}

export default Home;