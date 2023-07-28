import Card from "./Card";

const HomeCollection = () => {
	return (
		<div className="w-[95vw] h-full lg:space-y-16">
			<div className="w-full h-full flex justify-center">
				<h1 className="uppercase text-6xl tracking-wider">
					collections
				</h1>
			</div>
			<section className="py-6 bg-black rounded-xl">
				<div className="container flex flex-col justify-center items-center p-4 mx-auto">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2">
						<Card
							title="new arrival"
							srcLink="https://i.ibb.co/DMDXDyn/net-1.jpg"
						/>
						<Card
							title="pulp"
							srcLink="https://i.ibb.co/x53ktxc/pulp.jpg"
						/>
						<Card
							title="shoes"
							srcLink="https://i.ibb.co/PM1ZRwh/shoes.jpg"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomeCollection;
