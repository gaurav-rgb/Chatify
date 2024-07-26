import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] lg:h-[700px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'>
			<Sidebar className='bg-gray-800 text-white p-4' />
			<MessageContainer className='bg-white text-gray-900 p-4 flex-grow' />
		</div>
	);
};

export default Home;
