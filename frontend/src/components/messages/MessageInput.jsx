import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='px-4 py-2 border-t border-gray-200 bg-white flex items-center' onSubmit={handleSubmit}>
			<div className='relative flex-grow'>
				<input
					type='text'
					className='w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
					placeholder='Type your message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type='submit'
					className='absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600 transition-colors'
					disabled={loading}
				>
					{loading ? (
						<div className='loading loading-spinner w-6 h-6 border-2 border-blue-500'></div>
					) : (
						<BsSend className='w-6 h-6' />
					)}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
