'use client';
import Image from 'next/image';
import { CustomButton } from '@/components';

const Hero = () => {
	const handleScroll = () => {};

	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">
					Find, book or rent a car - quickly and easily
				</h1>

				<p className="hero__subtitle">
					We are the best car rental company in the world, with over 1 million
					satisfied customers.
				</p>

				<CustomButton
					title="Explore Cars"
					containerStyles="bg-primary-blue mt-10 text-white rounded-full"
					handleClick={handleScroll}
				/>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<Image
						fill
						className="object-contain slide-in"
						src="/hero.png"
						alt="hero"
					/>
				</div>

				<div className="hero__image-overlay" />
			</div>
		</div>
	);
};
export default Hero;
