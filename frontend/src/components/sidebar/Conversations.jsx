import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();

	return (
		<div className='py-2 flex flex-col overflow-auto bg-white shadow-lg rounded-lg max-h-screen'>
			{loading && (
				<div className='flex justify-center items-center py-4'>
					<span className='loading loading-spinner text-blue-500'></span>
				</div>
			)}

			{!loading && conversations.length > 0 ? (
				conversations.map((conversation, idx) => (
					<Conversation
						key={conversation._id}
						conversation={conversation}
						emoji={getRandomEmoji()}
						lastIdx={idx === conversations.length - 1}
					/>
				))
			) : (
				<div className='flex justify-center items-center py-4 text-gray-500'>
					<p>No conversations found. Start a new chat!</p>
				</div>
			)}
		</div>
	);
};

export default Conversations;
