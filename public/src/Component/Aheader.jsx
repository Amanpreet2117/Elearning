import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';


function Aheader() {
    // const mydata=useSelector((state)=>state.CARDDATA)
    // const dispatch=useDispatch()
    // console.log(mydata.length);
    return (
        <>
    
         {/* <!-- Navbar Start --> */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>eLEARNING</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
       <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" class="nav-item nav-link active">Home</a>
                <a href="/About/" class="nav-item nav-link ">About</a>
                <a href="/courses/" class="nav-item nav-link">Courses</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu fade-down m-0">
                        <a href="/ourteam/" class="dropdown-item">Our Team</a>
                        <a href="/courses/" class="dropdown-item">Testimonial</a>
                        <a href="/ufa/" class="dropdown-item">Useeffect&api</a>
                        <a href="/pgn/" class="dropdown-item">pagination</a>
                        <a href="/fh/" class="dropdown-item">formhandling</a>
                        <a href="/axios/" class="dropdown-item">axios</a>
                        <a href="/navigation/" class="dropdown-item">Navigation</a>
                        <a href="/classcomponent/" class="dropdown-item">classcomponent</a>
                        <a href="/Classupdate/" class="dropdown-item">Classupdate</a>


                        
                    </div>
                </div>
                <a href="/contact/" class="nav-item nav-link">Contact</a>
            </div>
            <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"><i class="fa fa-arrow-right ms-3"></i></a>
        </div>
        {/* {mydata.length} */}
    </nav>
    {/* <!-- Navbar End --> */}
        </>
    )
}

export default Aheader
