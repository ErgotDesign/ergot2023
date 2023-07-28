"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import SearchBar from "./home/SearchBar";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { motion } from "framer-motion";

const NavBar = () => {
	const [isVisible, setIsVisible] = useState(true);

	const handleScroll = useCallback(() => {
		const scrollY = window.scrollY;
		setIsVisible(scrollY <= 100);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	const showNavbar = useMemo(
		() =>
			isVisible ? "w-full h-12 bg-ergot fixed inset-0 z-50" : "hidden",
		[isVisible]
	);

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 3, delay: 2 }}
			className={showNavbar}
		>
			<div className="w-full h-24 flex justify-between items-center px-4 py-1">
				<div className="w-1/3 h-full  ">
					<Link href="/">
						<Logo w={90} h={90} />
					</Link>
				</div>
				<div className="w-1/3 h-full flex justify-center items-center">
					<SearchBar />
				</div>
				<div className="w-1/3 text-white uppercase flex items-center justify-end h-full space-x-2">
					<Link href="/home">
						<div className="icon">
							<FaHome />
						</div>
					</Link>
					<Link href="/about">
						<div className="icon">
							<SiAboutdotme />
						</div>
					</Link>
					<Link href="/shopping">
						<div className="icon">
							<FaShoppingBag />
						</div>
					</Link>
				</div>
			</div>
		</motion.nav>
	);
};

export default NavBar;
