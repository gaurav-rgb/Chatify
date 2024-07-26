import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "justify-end" : "justify-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-600" : "bg-gray-200";
	const textColor = fromMe ? "text-white" : "text-gray-800";

	return (
		<div className={`flex items-end ${chatClassName} my-2`}>
			{!fromMe && (
				<div className='flex-shrink-0'>
					<img alt='Profile' src={profilePic} className='w-10 h-10 rounded-full' />
				</div>
			)}
			<div className={`max-w-xs mx-2 p-3 rounded-lg shadow-md ${bubbleBgColor} ${textColor}`}>
				<p>{message.message}</p>
				<div className='text-xs text-gray-500 mt-1'>{formattedTime}</div>
			</div>
			{fromMe && (
				<div className='flex-shrink-0'>
					<img alt='Profile' src={profilePic} className='w-10 h-10 rounded-full' />
				</div>
			)}
		</div>
	);
};

export default Message;
