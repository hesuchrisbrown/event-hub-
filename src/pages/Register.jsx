import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import Input from "../components/Input";

const Register = () => {
	return (
		<PageWrapper>
			<Header />
			<Main className="flex justify-center">
				<div className="flex items-center">
					<Card>
						<h1 className="text-xl font-bold">Signup</h1>
						<Input
							label="Firstname"
							name="firstname"
							type="text"
							placeholder="Enter your name"
						/>
					</Card>
				</div>
			</Main>
			<Footer />
		</PageWrapper>
	);
};

export default Register;