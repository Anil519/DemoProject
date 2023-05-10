import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
return(
    <>
        {/* <div className="img">
            <div className="container">
                <div className="row ">
                    <div className="col-7 ">
                        <div className=" mt-5 p-5 ">

                        <div className="text">
                            <h1 className="text-white">Your Workflows,<br/>
                            structured & smarter
                            </h1>
                            <span className="fs-5 text-white fw-normal">
                                Try the customisable work mangament solution trust and<br/>
                                employees love working on.
                            </span>
                        </div>

                        <div className="">
                        <div className="input-group mb-3 w-50">
                            <input type="text" className="form-control" />
                            <button className="btn btn-success input-group-text">start free</button>
                        </div>

                        </div>
                        </div>

                         
                    </div>
                    <div className="col-5">

                    </div>
                </div>

            </div>
        </div> */}

        <div className="d-flex vh-100 ">
            <div className=" w-15 bg-dark  rounded d-flex justify-content-center">
                <div className="text-white m-0  ">
                    <h2 class="pt-3">DashBoard</h2>
                    <hr/>
                <ul class="m-0 ">
                    <li class="list-group-item text-center"></li>
                    <li class="list-group-item p-3 "><Link to="/d" class="list-group-item">DashBoard</Link></li>
                    <li class="list-group-item p-3"><Link to="/l" class="list-group-item">SignIn</Link></li>
                    <li class="list-group-item p-3"><Link to="/r" class="list-group-item">Registration</Link></li>
                    <li  class="list-group-item p-3 ">RTL</li>
                    <li  class="list-group-item p-3 ">Notifications</li>
                    <li class="list-group-item text-center"></li>
                   
                    
                </ul>

                </div>
            </div>
            <div className="w-85 bg-gray ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div>
                                <p className="text-secondary">Pages/<span className="text-dark">DashBoard</span></p>
                                <p className="fw-bold">DashBoard</p>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="d-flex flex-row-reverse justify-content-around p-3">
                                <div className="p-1">
                                <i class="fa-solid fa-gear fa-lg p-1"></i>
                                <i class="fa-solid fa-bell fa-lg p-1"></i>
                                <i class="fa-solid fa-user fa-xl p-1"></i>
                                </div>
                                <div className="p-1">
                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                        <button type="button" class="btn btn-outline-dark">Left</button>
                                        <button type="button" class="btn btn-outline-dark">Middle</button>
                                    </div>
                                </div>
                                <div className="p-1 ">
                                    <button className="btn btn-outline-danger">Online Number</button>
                                </div>
                                <div className=" p-1">
                                    <input type="text" className="form-control" placeholder="search.." />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <Outlet></Outlet>
            </div>
            
        </div>
    </>
    )

}
export default Layout;