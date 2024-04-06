import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3305/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });
      console.log("login form",response);
      if (response.ok) {
        alert("login successfull")
        setUser({
          email: "",
          password: ""
        });
        navigate("/");
      }else{
        alert("invalid credential");
        console.log("invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="my-3">
                <label for="Email">Email address</label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  // name="email"
                  // type="email"
                  // class="form-control"
                  // id="Email"
                  // placeholder="name@example.com"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div class="my-3">
                <label for="Password">Password</label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  // name="password"
                  // type="password"
                  // class="form-control"
                  // id="Password"
                  // placeholder="Password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" abled>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
