import React from "react";
import logo from "./images/logo.png"
import "../styles.css"
const Navigation = () => {
    return(
        <header>
           
            <nav>
                <div class="nav-top">
                <span className="logo"> <img src={logo}/></span>
                <a href="#" className="sign-in">Sign in</a>
                <i class="fas fa-search"></i>

                </div>

               
                <ul>
                    <a className="nav-link" href="#">Games<li className="nav-item"></li></a>
                    <a className="nav-link" href="#">Hardware<li className="nav-item"></li></a>
                    <a className="nav-link" href="#">Services<li className="nav-item"></li></a>
                    <a className="nav-link" href="#">News<li className="nav-item"></li></a>
                    <a className="nav-link" href="#">Shop<li className="nav-item"></li></a>
                    <a className="nav-link" href="#">Help<li className="nav-item"></li></a>
                </ul>
            </nav>

            {/* <div class="other">
                    <a href="#">My Playstation</a>
                    <button className="btn btn-secondary">Sign In</button>
                    <i class="fas fa-search"></i>
            </div> */}

        </header>
    )
}

export default Navigation