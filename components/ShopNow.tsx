import Link from "next/link";

const ShopNow = () => {
	return (
		<Link href="/shop">
			<button className="text-4xl w-full bg-ergot px-6 h-14 rounded-xl transform rotate-0 hover:-rotate-[5deg]  hover:bg-ergot/80">
				shop now
			</button>
		</Link>
	);
};

export default ShopNow;
