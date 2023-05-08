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
            <div className="d-flex justify-content-center text-white align-items-center vh-100 ">

            <form onSubmit={handleSubmit}>
                    <h1 className="mb-5 text-color" >Registration Form</h1>
                    <input className="form-control "
                        type="text"
                        value={name}
                        placeholder="Enter Name..."
                        onChange={(e) => setName(e.target.value)}
                        required/>
                <br/>
                    <input className="form-control"
                        type="email"
                        value={email}
                        placeholder="Enter Email..."
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                <br/>
                    <input className="form-control "
                        type="text"
                        value={userName}
                        placeholder="Enter UserName..."
                        onChange={(e) => setuserName(e.target.value)}
                        required/>
                <br/>
                    <input className="form-control "
                        type="text"
                        value={phone}
                        placeholder="Enter Phone..."
                        onChange={(e) => setPhone(e.target.value)}
                        required/>        
               <br/>
                    <input className="form-control"
                        type="password"
                        value={password}
                        placeholder="Enter Password..."
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                        <br/>
                <button type="submit" className="btn btn-primary d-flex justify-content-center ">Register</button>
            </form>
            </div>
       </>


        

    )

}
export default Registration;