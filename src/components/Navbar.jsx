import React from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
			<div className="">
        <img src={Logo} alt="Logo Image" />
      </div>
		</div>
	);
};

export default Navbar;
