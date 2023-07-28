import "./globals.css";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { Bebas_Neue } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
	title: "ERGOT",
	description: "We make Shades From Colors",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={bebas.className}>
			<body className="w-screen h-full min-h-screen overflow-x-hidden bg-beige flex flex-col items-center justify-between">
				<NavBar />
				<main className="w-full h-full">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
