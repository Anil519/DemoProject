import React from "react";
import { useState } from "react";
import Particle from "../particles/particle";
const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setuserName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("user: ", userName);
        console.log("phone: ", phone);
        console.log("Password: ", password);
    };

    return (
       <>
       <Particle/>
            <div className="d-flex justify-content-end text-white align-items-center vh-100 p-5 ">
                <div className="card col-6 text-white bg-white bg-opacity-50">
                    <div className="card-header ">
                    <h3 className="text-center">Registration Form</h3>
                    </div>
                    <div className="card-body">

                        <form onSubmit={handleSubmit}>
                            <div className="d-flex">
                                <label className="w-25">Name:</label>

                                <input className="form-control w-50"
                                    type="text"
                                    value={name}
                                    placeholder="Enter Name..."
                                    onChange={(e) => setName(e.target.value)}
                                    required/>
                            </div>
                            <br/>
                            <div className="d-flex">
                                <label className="w-25">Email:</label>
                                <input className="form-control w-50"
                                    type="email"
                                    value={email}
                                    placeholder="Enter Email..."
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>
                            </div>
                            <br/>

                            <div className="d-flex">
                                <label className="w-25">UserName:</label>

                                <input className="form-control w-50"
                                    type="text"
                                    value={userName}
                                    placeholder="Enter UserName..."
                                    onChange={(e) => setuserName(e.target.value)}
                                    required/>
                            </div>
                            <br/>
                            <div className="d-flex">
                                <label className="w-25">Phone Number:</label>

                                <input className="form-control w-50"
                                    type="text"
                                    value={phone}
                                    placeholder="Enter Phone..."
                                    onChange={(e) => setPhone(e.target.value)}
                                    required/>        
                            </div>
                        <br/>
                        <div className="d-flex">
                                <label className="w-25">Password:</label>

                                <input className="form-control w-50 "
                                    type="password"
                                    value={password}
                                    placeholder="Enter Password..."
                                    onChange={(e) => setPassword(e.target.value)}
                                    required/>
                        </div>
                        <br/>
                            <button type="submit" className="btn btn-primary d-flex justify-content-center ">Register</button>
                        </form>
                    </div>

                </div>

            </div>
       </>


        

    )

}
export default Registration;