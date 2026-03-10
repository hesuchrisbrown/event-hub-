import React from 'react'
import Header from '../components/Header'
import footer from 'daisyui/components/footer';
import Main from '../components/Main'

const Register = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main />
            <footer className="footer p-10 bg-base-200 text-base-content">
                <p>© 2026 Event Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Register;
