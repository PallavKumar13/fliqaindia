import React from 'react'
import logo from './Image/fliqaindia.png'
import './header.css'
import{Link} from "react-router-dom";

export default function Header() {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid ">
                        <Link class="navbar-brand " to="/Home">
                            <img src={logo} alt="" width="10%"></img>
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 10.146a.5.5 0 0 1 .708 0L8 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-4.292a.5.5 0 0 0 .708 0L8 2.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z" />
                            </svg></span>
                        </button>
                        <div class="collapse navbar-collapse me-5" id="navbarNav">
                            <ul class="navbar-nav ">
                                <li class="nav-item active">
                                    <Link class="nav-link  " to="/Home">HOME</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">ABOUT US</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/LogoDesign">SERVICES</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">FREELANCERS</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">BLOG</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">TUTORIAL</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">CONTACT US</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
