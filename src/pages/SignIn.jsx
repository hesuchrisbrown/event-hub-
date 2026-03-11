import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";


const SignIn = () => {
  return (
      <PageWrapper>
            <Header />
            <Main>
                <p>SIgn In page</p>
                <Link to="/" className="btn btn-primary mt-4">
                    Go to Homepage
                </Link>

            </Main>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <p>© 2026 Event Hub. All rights reserved.</p>
            </footer>
        </PageWrapper>
    );
};

export default SignIn