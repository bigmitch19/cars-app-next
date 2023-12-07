import { auth } from '@/auth';

const AccountDashboard = async () => {
	const session = await auth();
	// Placeholder user data
	const user = {
		username: 'john_doe',
		email: 'john@example.com',
		plan: 'Premium'
		// ...other user information
	};

	return (
		<>{JSON.stringify(session, null, 2)}</>
		// <div className="bg-gray-100 min-h-screen flex justify-center items-center">
		// 	<div className="bg-white p-8 rounded shadow-md">
		// 		<h1 className="text-2xl font-bold mb-4">Account Dashboard</h1>
		// 		<div className="mb-4">
		// 			<p className="text-gray-600">
		// 				<span className="font-bold">Username:</span> {user.username}
		// 			</p>
		// 		</div>
		// 		<div className="mb-4">
		// 			<p className="text-gray-600">
		// 				<span className="font-bold">Email:</span> {user.email}
		// 			</p>
		// 		</div>
		// 		<div className="mb-4">
		// 			<p className="text-gray-600">
		// 				<span className="font-bold">Plan:</span> {user.plan}
		// 			</p>
		// 		</div>
		// 		{/* Add more user details here */}
		// 	</div>
		// </div>
	);
};

export default AccountDashboard;
