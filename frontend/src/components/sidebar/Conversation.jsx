import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex items-center gap-3 p-3 cursor-pointer transition-all rounded-lg
				${isSelected ? "bg-sky-600" : "hover:bg-sky-500"}
				${isSelected ? "text-white" : "text-gray-700"}
				`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`relative w-12 h-12 rounded-full overflow-hidden`}>
					<img
						src={conversation.profilePic}
						alt={`${conversation.fullName} avatar`}
						className='w-full h-full object-cover'
					/>
					{isOnline && (
						<span className='absolute bottom-0 right-0 block h-3 w-3 bg-green-500 border-2 border-white rounded-full'></span>
					)}
				</div>

				<div className='flex-grow flex flex-col justify-center'>
					<div className='flex justify-between items-center'>
						<p className={`font-semibold text-lg truncate ${isSelected ? "text-white" : "text-gray-800"}`}>
							{conversation.fullName}
						</p>
						<span className='text-2xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='border-b border-gray-300 mx-3 my-1'></div>}
		</>
	);
};

export default Conversation;
