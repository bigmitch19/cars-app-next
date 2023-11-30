'use client'
import Image from "next/image"
import { SearchManufacturerProps } from "@/types"
import { Combobox, Transition } from "@headlessui/react"

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    return (
        <div className="search-manufacturer">
            <Combobox >
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg" className="ml-4" alt="Car logo" width={20} height={20} />
                    </Combobox.Button>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer