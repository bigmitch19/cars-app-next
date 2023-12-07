import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const NavBar = () => (
	<header className="w-full  absolute z-10">
		<nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 bg-transparent">
			<Link href="/" className="flex justify-center items-center">
				<Image
					src="/logo.svg"
					alt="logo"
					width={118}
					height={18}
					className="object-contain min-w-full"
				/>
			</Link>

			<div className="flex gap-1 md:gap-3">
				<Link href="/explore-cars">
					<CustomButton
						title="Catalogue"
						btnType="button"
						containerStyles="text-white rounded-full bg-primary-blue min-w-[130px]"
					/>
				</Link>

				<CustomButton
					title="Sign in"
					btnType="button"
					containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
				/>
			</div>
		</nav>
	</header>
);

export default NavBar;
