import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="Nav w-100 position-fixed">
                <nav className="navbar navbar-light bg-light">
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <div className="p-2  ms-3 bd-highlight">
                            <Link to='' > <img src={require('../../assets/img/flg_logo4354.png')} className="w-80" /></Link>
                        </div>
                        <div className="p-2 mt-3  ms-3 bd-highlight">
                            Features
                        </div>
                        <div className="p-2 mt-3 ms-3 bd-highlight">
                            Pricing
                        </div>
                        <div className="p-2 mt-3 ms-3 bd-highlight">
                            Use Cases
                        </div>
                        <div className="p-2 mt-2 bd-highlight dropdown">
                            <a className="btn btn-transparent dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse bd-highlight">
                            <div className="p-2 bd-highlight">
                                <Link to='r' >
                                    <button type="text" className="btn btn-outline-success">Signup</button>
                                </Link>
                            </div>
                            <div className="p-2 bd-highlight">
                            <Link to='/l'>
                                <button type="text" className="btn btn-outline-secondary">Login</button>
                            </Link>
                            
                            </div>
                    </div>
                </nav>

            </div>
        </>
    )

}
export default Header;