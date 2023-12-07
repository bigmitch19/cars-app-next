'use client';

import { useState } from 'react';

export default function Home() {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			<div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 w-full  ">
				<div className="relative  h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl overflow-hidden  ">
					<div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
						<div className="self-start hidden lg:flex flex-col text-gray-300">
							<h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
							<p className="pr-3 text-sm opacity-75">
								To keep connected with us please login with your personal info
							</p>
						</div>
					</div>
					<div className="flex justify-center self-center z-10">
						<div className="p-12 bg-white mx-auto rounded-3xl w-96">
							<div className="mb-7">
								<h3 className="font-semibold text-2xl text-gray-800">
									Sign In
								</h3>
								<p className="text-gray-400">
									Don't have an account?{' '}
									<a
										href="#"
										className="text-sm text-purple-700 hover:text-purple-700"
									>
										Sign Up
									</a>
								</p>
							</div>
							<div className="space-y-6">
								<div>
									<input
										className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
										type="email"
										placeholder="Email"
									/>
								</div>
								<div className="relative">
									<input
										placeholder="Password"
										type={showPassword ? 'text' : 'password'}
										className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
									/>
									<div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
										<svg
											onClick={togglePasswordVisibility}
											className={`h-4 text-purple-700 ${
												showPassword ? 'block' : 'hidden'
											}`}
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512"
										>
											{/* SVG path for showing password */}
										</svg>
										<svg
											onClick={togglePasswordVisibility}
											className={`h-4 text-purple-700 ${
												showPassword ? 'hidden' : 'block'
											}`}
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 640 512"
										>
											{/* SVG path for hiding password */}
										</svg>
									</div>
								</div>
								{/* Rest of the content */}
								{/* ... */}
							</div>
						</div>
					</div>
					<svg
						className="absolute bottom-0 left-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
					>
						<path
							fill="#fff"
							fillOpacity="1"
							d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
						></path>
					</svg>
				</div>
			</div>
		</>
	);
}
