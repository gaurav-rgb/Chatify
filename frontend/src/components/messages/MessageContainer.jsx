import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// Cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col bg-white shadow-md rounded-lg overflow-hidden'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-gray-100 px-4 py-2 border-b border-gray-200'>
						<span className='text-gray-600'>To:</span>{" "}
						<span className='text-gray-900 font-semibold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full bg-gray-50'>
			<div className='px-4 text-center text-gray-500 flex flex-col items-center gap-2'>
				<p className='text-lg md:text-xl font-medium'>Welcome, {authUser.fullName}! 👋</p>
				<p className='text-sm md:text-md'>Select a chat to start messaging</p>
				<TiMessages className='text-5xl text-gray-400 mt-4' />
			</div>
		</div>
	);
};
