import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-6 px-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold">UI Portfolio</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
