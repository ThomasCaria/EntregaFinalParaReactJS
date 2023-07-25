import React from 'react';
import "./NavBar.css";
import Logo from "./Logo.jpg";
import ShoppingChart from "../Cart/Cart"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="Navbar">
            <img className="Logo" src={Logo} alt="logo"/>
            <ul className="NavbarItem">
                <Link className="NavbarLink" to="/home">Home</Link>
                <Link className="NavbarLink" to="/shop">Shop</Link>
                <Link className="NavbarLink" to="/contact">Contact</Link>
                <ShoppingChart />
            </ul>
        </nav>
    )
}

export default NavBar;