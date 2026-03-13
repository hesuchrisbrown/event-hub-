import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useState, useEffect } from "react";
import supabase from "./utils/supabase";
import { SessionContext } from "./context/SessionContext";

function App() {
	const [session, setSession] = useState(null);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
			setSession(session);

			if (session) {
				const { data: profileData } = await supabase
					.from("profiles")
					.select()
					.eq("id", session.user.id)
					.single();

				setProfile(profileData);
			}
		});

		return () => data.subscription.unsubscribe();
	}, []);

	return (
		<SessionContext.Provider value={{ session, profile }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</SessionContext.Provider>
	);
}

export default App;