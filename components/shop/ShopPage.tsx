import Gallery from "./Gallery";
import SideMenu from "./SideMenu";

const ShopPage = () => {
	return (
		<div className="w-full flex justify-center items-center mt-32 mb-8  ">
			<div className="w-[95vw] flex justify-center space-x-12 ">
				<SideMenu />
				<Gallery />
			</div>
		</div>
	);
};

export default ShopPage;
