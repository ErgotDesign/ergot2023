import { useState } from "react";
import Logo from "./assets/LOGO.png";
import Scritta from "./assets/scritta.png";

function App() {
	const [enter, setEnter] = useState(false);
	return (
		<div className="h-screen w-screen bg-black flex flex-col text-white">
			{/* {enter && (
				<div className="w-full h-full bg-transparent px-8 flex flex-col justify-center items-center">
					<div className="flex flex-col">
						<img
							src={Scritta}
							alt="logo"
							className="w-full h-[10rem]"
						/>
						<nav className="flex uppercase space-x-2 xl:space-x-10 w-full">
							<div>about</div>
							<div>shop</div>
							<div>collection</div>
							<div> about</div>
						</nav>
					</div>
					<div className="w-full xl:w-11/12 h-[50rem] xl:border mt-8 flex flex-wrap ">
						<div className="w-full h-36 bg-yellow-300"></div>
						<div className="w-1/2 bg-yellow-400"></div>
						<div className="w-1/2 bg-yellow-500"></div>
						<div className="w-1/2 bg-yellow-600"></div>
					</div>
				</div>
			)} */}
			{/* {!enter && ( */}
			<div className="w-full h-full  flex flex-col justify-center items-center">
				<img
					src={Logo}
					alt="logo"
					className="w-[30rem] animate-pulse"
					onClick={() => setEnter(true)}
				/>
				<p className="text-4xl uppercase font-mono animate-bounce">
					work in progress
				</p>
				{/* <p className="animate-pulse text-2xl ">enter</p> */}
			</div>
			{/* )} */}
		</div>
	);
}

export default App;
