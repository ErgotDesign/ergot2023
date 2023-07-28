"use client";

import Banner from "@/components/home/Banner";
import HomeCollection from "@/components/home/HomeCollection";
import Loader from "../Loader";
import { use, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import ShopNow from "../ShopNow";

const HomePage = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	if (isLoading) {
		return (
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
				>
					<Loader />
				</motion.div>
			</AnimatePresence>
		);
	} else {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<div className="w-full flex flex-col items-center mt-20 mb-8 space-y-12 ">
					<Banner />
					<HomeCollection />
					<ShopNow />
				</div>
			</motion.div>
		);
	}
};

export default HomePage;
