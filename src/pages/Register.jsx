import { useState } from 'react';
import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const URL = "http://localhost:3305/api/auth/register";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const res_data = await response.json();
                console.log("res from server", res_data);
                setUser(
                    {
                        name: "",
                        email: "",
                        password: ""
                    }
                );
                navigate("./login");
            }
            console.log(response);
        } catch (error) {
            
            console.log("register", error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div class="form my-3">
                                <label for="name">Full Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    required
                                    placeholder="Enter Your Name"
                                    value={user.name}
                                    onChange={handleInput}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    name="email"
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    required
                                    value={user.email}
                                    onChange={handleInput}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" abled>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register