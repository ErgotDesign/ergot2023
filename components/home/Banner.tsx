import Image from "next/image";
import ShopNow from "../ShopNow";

const Banner = () => {
	return (
		<div className="w-[95vw] h-[30vh] lg:h-[70vh] bg-black/90  flex flex-col lg:flex-row items-center justify-between rounded-xl">
			<div className="relative w-full h-full">
				<div className="w-full h-full absolute z-50 flex justify-center items-end pb-4">
					<ShopNow />
				</div>
				<div className="w-full h-full absolute flex justify-center items-center">
					<Image
						src="https://i.ibb.co/pxDXcmX/banner2.png"
						width={1000}
						height={1000}
						alt="banner"
						className="w-1/2 absolute object-fit"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
