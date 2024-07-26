import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen'>
			<SearchInput />
			<div className='divider my-4 border-gray-600'></div>
			<Conversations />
			<div className='mt-auto'>
				<LogoutButton />
			</div>
		</div>
	);
};
export default Sidebar;
