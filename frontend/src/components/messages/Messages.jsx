import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 py-2 flex-1 overflow-auto bg-gray-50 rounded-lg shadow-inner space-y-2'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message, index) => (
					<div
						key={message._id}
						ref={index === messages.length - 1 ? lastMessageRef : null}
						className='transition-transform transform hover:scale-105'
					>
						<Message message={message} />
					</div>
				))}

			{loading && (
				<div className='space-y-2'>
					{[...Array(3)].map((_, idx) => (
						<MessageSkeleton key={idx} />
					))}
				</div>
			)}
			{!loading && messages.length === 0 && (
				<p className='text-center text-gray-500'>Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages;
