import React from "react";
import { useState } from "react";
import ParticleLogin from "../particles/particlesLogin";
import { Link } from "react-router-dom";
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

        <div className="container">
            <div className="card bg-white bg-opacity-50 ">

            <div className="row ">
                <div className="col-6">

                </div>
                <div className="col-6 p-5">
                    <div className="card ">
                        <div className="mb-3 mt-3">

                            <h3 className="text-center" >SIGN IN</h3>
                            <p className="text-center">To get inspired!</p>
                        </div>

                <form onSubmit={handleLogin}>
                    <div className="d-flex justify-content-center ms-5">
                       
                            <input className="form-control w-50 rounded-pill"
                                type="email"
                                value={email}
                                placeholder="Enter Email..."
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                    </div>
                            
                        <br/>
                        <div className="d-flex justify-content-center ms-5 text-center">
                          
                            <input className="form-control w-50 rounded-pill"
                                type="password"
                                value={password}
                                placeholder="Enter Password..."
                                onChange={(e) => setPassword(e.target.value)}
                                required/>

                        </div>
                    <div className="text-center p-3 ">
                        <button type="submit" className="btn btn-primary w-50 rounded-pill ms-5 shadow">Login</button>
                        <p className="p-3">Don't have account? <Link to='/r'>Signup</Link></p>
                    </div>
                </form>
                    </div>

                </div>


            </div>
            </div>

        </div>
        </div>
        {/* <div className="d-flex justify-content-end text-white align-items-center vh-100 ">
            <div className="container">
        
            </div>

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
               
        </div> */}
        </>
    )

}
export default Login;