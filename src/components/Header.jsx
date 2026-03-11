import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="px-6 pt-4">
            <div className="navbar bg-base-100 shadow-sm rounded-xl">

                {/* Logo */}
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <span style={{ color: '#00ACEE' }}>Event</span>
                        <span style={{ color: 'white' }}>Hub</span>
                    </a>
                </div>

                {/* Right Side Buttons */}
                <div className="flex-none flex items-center gap-3">

                    <Link
                        to="/SignIn"
                        className="btn btn-ghost btn-lg rounded-btn hover:bg-yellow-100 hover:text-black transition-colors duration-200"
                    >
                        Sign In
                    </Link>

                    <Link
                        to="/Register"
                        className="btn btn-ghost btn-lg rounded-btn hover:bg-yellow-100 hover:text-black transition-colors duration-200"
                    >
                        Register
                    </Link>

                    {/* Avatar */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="greg pfp.webp"
                                />
                            </div>
                        </div>

                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header