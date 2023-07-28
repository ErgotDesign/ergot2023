import Logo from "@/components/Logo";

const Loader = () => {
	return (
		<div className="w-screen h-screen bg-beige border-black flex justify-center items-center animate-pulse">
			<Logo w={500} h={500} style={""} />
		</div>
	);
};

export default Loader;
