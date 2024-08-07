"use client";

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { Fragment } from 'react';

// const sortOptions = [
//     { name: 'Most Popular', href: '#', current: true },
//     { name: 'Best Rating', href: '#', current: false },
//     { name: 'Newest', href: '#', current: false },
//     { name: 'Price: Low to High', href: '#', current: false },
//     { name: 'Price: High to Low', href: '#', current: false },
//   ]

type ProductSortOptionsProps = {
    current: string;
    options: { label: string; value: string;}[]
}

export function ProductSortOptions({ current, options }: ProductSortOptionsProps) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((option) => (
                            <Menu.Item key={option.label}>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={clsx(
                                            current === option.value ? "font-medium text-gray-900" : "text-gray-500",
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm",
                                        )}
                                    >
                                        {option.label}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
