import React from "react";
import { Link } from "react-router-dom";
const Header = ({data}) => {
    return (
        <>
            <div className="Nav w-100 position-fixed">
                <nav className="navbar navbar-light bg-light">
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <div className="p-2  ms-3 bd-highlight">
                            <Link to='' > <img src={require('../../assets/img/flg_logo4354.png')} className="w-80" alt="no img" /></Link>
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
                            <Link className="btn btn-transparent dropdown-toggle"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item" >Action</Link></li>
                                <li><Link className="dropdown-item" >Another action</Link></li>
                                <li><Link className="dropdown-item" >Something else here</Link></li>
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