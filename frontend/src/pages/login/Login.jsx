import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600'>
			<div className='w-full max-w-md p-6 rounded-lg shadow-lg bg-white bg-opacity-90 backdrop-filter backdrop-blur-md'>
				<h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
					Login to
					<span className='text-blue-600'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-700'>
							Username
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className='mb-6'>
						<label className='block text-sm font-medium text-gray-700'>
							Password
						</label>
						<input
							type='password'
							placeholder='Enter password'
							className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className='flex items-center justify-between'>
						<Link to='/signup' className='text-sm text-blue-600 hover:underline'>
							{"Don't"} have an account?
						</Link>
						<button
							className='px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500'
							type='submit'
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
