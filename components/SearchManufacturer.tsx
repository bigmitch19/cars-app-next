'use client';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { SearchManufacturerProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({
	manufacturer,
	setManufacturer
}: SearchManufacturerProps) => {
	const [query, setQuery] = useState('');

	const filteredManufacturers =
		query === ''
			? manufacturers
			: manufacturers.filter((item) => {
					item
						.toLowerCase()
						.replace(/\s/g, '')
						.includes(query.toLowerCase().replace(/\s/g, ''));
			  });

	return (
		<div className="search-manufacturer">
			<Combobox>
				<div className="relative w-full">
					<Combobox.Button className="absolute top-[14px]">
						<Image
							src="/car-logo.svg"
							className="ml-4"
							alt="Car logo"
							width={20}
							height={20}
						/>
					</Combobox.Button>
					<Combobox.Input
						className="search-manufacturer__input"
						placeholder="Volkswagen"
						displayValue={(manufacturer) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					></Combobox.Input>

					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					></Transition>

					<Combobox.Options>
						{filteredManufacturers.length === 0 && query !== '' ? (
							<Combobox.Option
								value={query}
								className="search-manufacturer__option"
							>
								Create "{query}"
							</Combobox.Option>
						) : (
							filteredManufacturers.map((item) => (
								<Combobox.Option
									key={item}
									className={({ active }) =>
										`relative search-manufacturer__option`
									}
								></Combobox.Option>
							))
						)}
					</Combobox.Options>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchManufacturer;
