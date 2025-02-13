import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
const Header = () => {
    const [isOpen, SetisOpen] = useState(false);
    return (
        <header className="bg-gray-900 text-white py-6 px-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold">UI Portfolio</h1>
            <nav>
                <ul className="hidden md:flex space-x-6">
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
                <CiMenuBurger
                    className=" md:hidden text-white text-lg"
                    onClick={() => SetisOpen(!isOpen)}
                />
                <ul
                    className={`md:hidden flex flex-col bg-gray-900 w-full h-full absolute top-16 left-0 space-x-6 space-y-4 text-center justify-center transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
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
