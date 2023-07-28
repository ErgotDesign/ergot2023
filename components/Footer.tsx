"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import { useEffect } from "react";
const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 3, delay: 2 }}
			className="bg-black/90 text-white w-full lg:h-24 p-10 flex flex-col lg:flex-row lg:justify-between items-center tracking-widest"
		>
			<div className="w-full lg:w-1/3 flex items-center space-x-4">
				<Logo h={60} w={60} style="" />
				<h4 className="text-lg">We Give Shades To Colors</h4>
			</div>
			<ul className="w-1/3 flex flex-col lg:flex-row lg:justify-center space-x-6">
				<li>
					<a href="/about" className="text-sm">
						About
					</a>
				</li>
				<li>
					<a href="/contact" className="text-sm">
						Contact
					</a>
				</li>
				<li>
					<a href="/privacy" className="text-sm">
						Privacy Policy
					</a>
				</li>
				<li>
					<a href="/terms" className="text-sm">
						Terms of Service
					</a>
				</li>
			</ul>
			<div className="w-1/3 text-sm flex justify-end">
				<p>© 2023 Ergot. All rights reserved.</p>
			</div>
		</motion.footer>
	);
};
export default Footer;
