import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Car Max',
	description: 'Car auction website'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="relative bg-black text-white">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
