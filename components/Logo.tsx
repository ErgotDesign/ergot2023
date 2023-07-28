import Image from "next/image";

type Props = {
	h: number;
	w: number;
	style: string;
};
const Logo = ({ h, w, style }: Props) => {
	return (
		<Image
			src="https://i.ibb.co/3BHMQgs/Logo.png"
			width={w}
			height={h}
			alt="logo"
			className={style}
		/>
	);
};

export default Logo;
