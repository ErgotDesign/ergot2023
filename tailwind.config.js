/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				texture: "url('https://i.ibb.co/LCFyPjy/Black-Stone.jpg')",
			},
			colors: {
				ergot: "#694d86",
				beige: "#d9cebd",
			},
		},
		plugins: [require("tailwind-scrollbar")],
		darkMode: "class",
	},
};
