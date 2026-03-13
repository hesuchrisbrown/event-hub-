import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import Input from "../components/Input";
import supabase from "../utils/supabase";

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const [session, setSession] = useState(null);

    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setFormData({ ...formData, [inputName]: inputValue });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.email || !formData.password) {
            alert("Email and password are required");
            return;
        }

        try {
            const { data: signupData, error: signupError } = await supabase.auth.signUp({
                email: formData.email.trim(),
                password: formData.password,
            });

            if (signupError) {
                console.log(signupError);
                alert(signupError.message);
                return;
            }

            if (signupData?.user) {
                const { data: profileData, error: profileError } = await supabase
                    .from("profiles")
                    .insert({
                        id: signupData.user.id,
                        firstname: formData.firstname,
                        lastname: formData.lastname,
                        email: formData.email.trim(),
                    })
                    .select();

                if (profileError) {
                    console.log(profileError);
                    alert(profileError.message);
                    return;
                }

                console.log("profile data", profileData);
                alert("Signup successful! Please check your email to confirm.");
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Try again.");
        }
    };

    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return (
        <PageWrapper>
            <Header />
            <Main className="flex justify-center">
                <div className="flex items-center">
                    {!session ? (
                        <Card>
                            <h1 className="text-xl font-bold mb-4">Signup</h1>

                            <Input
                                label="Firstname"
                                name="firstname"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full"
                                onChange={handleInputChange}
                            />

                            <Input
                                label="Lastname"
                                name="lastname"
                                type="text"
                                placeholder="Enter your lastname"
                                className="w-full"
                                onChange={handleInputChange}
                            />

                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your Email"
                                className="w-full"
                                onChange={handleInputChange}
                            />

                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Enter your Password"
                                className="w-full mb-5"
                                onChange={handleInputChange}
                            />

                            <button
                                className="btn btn-primary rounded-full"
                                onClick={handleSubmit}
                            >
                                Signup
                            </button>
                        </Card>
                    ) : (
                        <Card>You are already signed in</Card>
                    )}
                </div>
            </Main>
            <Footer />
        </PageWrapper>
    );
};

export default Register;