import React from 'react'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
    return (
        <PageWrapper>
			<Header />
			<Main>This is the homepage</Main>
			<Footer />
		</PageWrapper>


    );
};

export default Home;