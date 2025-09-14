// NAMED IMPORT
import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName , setBtnName] =  useState("login");

    return(
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>

                    <button className="btn" onClick={()=>{
                        btnName === "login" ? (setBtnName("logout")) : (setBtnName("login"))
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>

        </div>
    )
}

export default Header;