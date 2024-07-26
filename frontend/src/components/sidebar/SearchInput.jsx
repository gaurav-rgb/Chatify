import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else {
			toast.error("No such user found!");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex items-center gap-2 bg-white shadow-md rounded-full p-2 w-full max-w-lg mx-auto'
		>
			<input
				type='text'
				placeholder='Search...'
				className='flex-grow p-2 rounded-full bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type='submit'
				className='btn btn-circle bg-gradient-to-r from-sky-500 to-blue-600 text-white p-2 shadow-lg transform transition-transform hover:scale-105 active:scale-95'
			>
				<IoSearchSharp className='w-6 h-6' />
			</button>
		</form>
	);
};

export default SearchInput;
