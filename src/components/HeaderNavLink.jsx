@@ -1,53 +1,17 @@
import React from "react";
import { NavLink } from "react-router";
import HeaderNavLink from "./HeaderNavLink";
//rafce
const Header = () => {
	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="flex max-w-7xl mx-auto w-full">
				<div className="flex-1">
					<a className="btn btn-ghost text-xl px-0">daisyUI</a>
					<a className="btn btn-ghost text-xl px-0">EventHub</a>
				</div>
				<div className="flex-none">
                    <HeaderNavLink to="/" linkText="Home" />
					<HeaderNavLink to="/register" linkText="Register" />
                    <div className="dropdown dropdown-end">
						<div
							tabIndex={0}