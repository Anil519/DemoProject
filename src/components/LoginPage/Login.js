import React from "react";
import { useState } from "react";
import ParticleLogin from "../particles/particlesLogin";
const Login=()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);
    };

    return(
        <>
        <ParticleLogin/>
        <div className="d-flex justify-content-center text-white align-items-center vh-100 ">
        <form onSubmit={handleLogin}>
                    <h1 className="mb-3 text-color" >Login Form</h1>
                    
                    <input className="form-control"
                        type="email"
                        value={email}
                        placeholder="Enter Email..."
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                <br/>
                    <input className="form-control"
                        type="password"
                        value={password}
                        placeholder="Enter Password..."
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                        <br/>
                <button type="submit" className="btn btn-primary d-flex justify-content-center ">Login</button>
            </form>
        </div>
        </>
    )

}
export default Login;