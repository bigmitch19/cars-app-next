'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
	title,
	containerStyles,
	handleClick,
	btnType
}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`custom-btn active:scale-95 transition-all duration-100  ${containerStyles} }`}
			onClick={handleClick}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	);
};

export default CustomButton;
