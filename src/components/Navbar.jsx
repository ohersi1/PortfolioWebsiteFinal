import React from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
			<div>
				<img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
			</div>
			{/* Menu */}

			<ul className="hidden md:flex">
				<li>Home</li>
				<li>About</li>
				<li>Skills</li>
				<li>Work</li>
				<li>Contact</li>
			</ul>

			{/* Hamburger Menu */}
			<div className="hidden">
				<FaBars />
			</div>
			{/* Mobile Menu */}
			<ul className="hidden">
				<li>Home</li>
				<li>About</li>
				<li>Skills</li>
				<li>Work</li>
				<li>Contact</li>
			</ul>
			{/* Social Icons */}
			<div className="hidden"></div>
		</div>
	);
};

export default Navbar;
