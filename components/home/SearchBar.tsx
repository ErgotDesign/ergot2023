import { useState } from "react";
import { FaSearch } from "react-icons/fa";
type Props = {
	search: string;
};
const SearchBar = ({ search = "" }: Props) => {
	const [searchTermState, setSearchTermState] = useState(search);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTermState(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Search term: " + searchTermState);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex justify-center items-center"
		>
			<input
				type="text"
				value={searchTermState}
				onChange={handleChange}
				className="border-y border-ergot rounded-l-lg rounded-y-lg h-10 lg:w-[25rem] p-2"
			/>
			<button
				type="submit"
				className="w-8 h-10 border border-ergot rounded-r-lg rounded-y-lg flex justify-center items-center bg-white py-1"
			>
				<FaSearch className="text-ergot " />
			</button>
		</form>
	);
};

export default SearchBar;
