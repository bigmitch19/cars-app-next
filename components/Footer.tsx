import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
				<div className="flex flex-col justify-start items-start gap-6">
					<Image
						src="./logo.svg"
						alt="logo"
						width={118}
						height={18}
						className="object-contain"
					/>
					<p>CarMax {currentYear}. All rights reserved.</p>
				</div>
				<div className="footer__links">
					{footerLinks.map((link) => (
						<div className="footer__link" key={link.title}>
							<h3 className="font-bold">{link.title}</h3>
							{link.links.map((item) => (
								<Link
									className="hover:underline cursor-pointer"
									key={item.title}
									href={item.url}
								>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-wrap justify-between items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
				<p>@{currentYear} CarMax. All rights reserved&reg;</p>
				<div className="footer__copyrights-link">
					<Link href="/" className="text-gray-500 hover:underline">
						Privacy Policy
					</Link>

					<Link href="/" className="text-gray-500 hover:underline">
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;