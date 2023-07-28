const SideMenu = () => {
	return (
		<div className="w-1/6 h-full text-ergot space-y-4">
			<h2 className="text-4xl">shop</h2>
			<h4 className="text-2xl">all</h4>
			<section className="border-t border-black pt-4">
				<h4 className="text-2xl">collection</h4>
				<h6 className="text-lg hover:text-ergot/50">- pulp</h6>
				<h6 className="text-lg hover:text-ergot/50">
					- spring/summer 20
				</h6>
				<h6 className="text-lg hover:text-ergot/50">
					- fall/winter 19
				</h6>
			</section>
			<section className="border-t border-b border-black py-4">
				<h4 className="text-2xl">accessories</h4>
				<h6 className="text-lg hover:text-ergot/50">- key chain</h6>
				<h6 className="text-lg hover:text-ergot/50">- bags</h6>
				<h6 className="text-lg hover:text-ergot/50">- hat</h6>
			</section>
		</div>
	);
};

export default SideMenu;
