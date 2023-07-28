import Image from "next/image";

type Props = {
	srcLink: string;
	title: string;
};
const Card = ({ srcLink, title }: Props) => {
	return (
		<div className="w-[28rem] h-[20rem] bg-black text-ergot flex justify-center items-center hover:bg-ergot hover:text-black hover:rotate-[2deg] hover:scale-105 hover:border-2 rounded-full overflow-hidden">
			<h1 className="w-1/3 uppercase text-6xl font-bold tracking-wider transform pl-4">
				{title}
			</h1>

			<div className="w-2/3 h-full rounded-full bg-white overflow-hidden">
				<Image
					src={srcLink}
					alt={"collection"}
					width={200}
					height={600}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default Card;
