'use client';

import Image from 'next/image';

import { CustomButton } from '@components';
import Link from 'next/link';

const Hero = () => {
	const handleScroll = () => {
		const nextSection = document.getElementById('discover');

		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">
					Discover, reserve, and drive your dream car - fast and effortlessly!
				</h1>

				<p className="hero__subtitle ">
					Revolutionize your car rental journey with our seamless reservation
					system.
				</p>

				<Link href="/explore-cars">
					<CustomButton
						title="Explore Cars"
						containerStyles="bg-primary-blue text-white rounded-full mt-10"
						handleClick={handleScroll}
					/>
				</Link>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<div className=" p-28 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 h-[1000px] w-[600px]"></div>
					<Image src="/hero.png" alt="hero" fill className="object-contain" />
				</div>

				<div className="hero__image-overlay" />
			</div>
		</div>
	);
};

export default Hero;
