'use client'
import Link from 'next/link'
import Image from 'next/image'
import BurgerIcon from './burger-svg'
import { useState } from 'react'
import CloseIcon from './close-icon-svg'
import SearchBar from './search-bar'
import ProfileDropdown from './profile-dropdown'
const SiteHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
        useState<boolean>(false)

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setIsProfileDropdownOpen(!isProfileDropdownOpen)
        }
    }
    return (
        <header className=" bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
            <div
                className={
                    'custom-container w-full py-3 flex gap-x-4 xl:max-w-2xs xl:bg-gray-900 '
                }
            >
                <img
                    src="./house-icon.svg"
                    alt="application icon"
                    width="32"
                    height="42"
                />
                <h1 className="grow text-3xl text-white font-black xl:text-center">
                    Work<span className="text-indigo-300">cation</span>
                </h1>
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    type="button"
                    className="px-3 py-3 -mr-3 -mt-1.5 rounded-sm focus:outline-none focus:bg-gray-600 sm:hidden"
                >
                    {isNavOpen ? <CloseIcon /> : <BurgerIcon />}
                </button>
            </div>

            <nav
                className={`${isNavOpen ? '' : 'hidden'} sm:flex custom-container sm-reset-left  sm:items-center sm:justify-end sm:w-full xl:justify-between`}
            >
                <div className="hidden xl:block">
                    <SearchBar isinHeader />
                </div>
                <div className="sm:flex sm:gap-4">
                    <ul className=" pt-2 pb-5 border-b border-gray-800  text-white whitespace-nowrap sm:flex sm:items-center sm:gap-4 sm:border-b-0 sm:py-0 sm:text-sm sm:justify-between xl:text-gray-900">
                        <li className="block py-1 rounded font-semibold custom-outline hover:text-gray-300 xl:hover:text-gray-600 ">
                            <Link href="">List your property</Link>
                        </li>
                        <li className="mt-1 block py-1 rounded font-semibold  custom-outline hover:text-gray-300 sm:mt-0 xl:hover:text-gray-600">
                            <Link href="">Trips</Link>
                        </li>
                        <li className="mt-1 block py-1 rounded font-semibold custom-outline hover:text-gray-300 sm:mt-0 xl:hover:text-gray-600">
                            <Link href="">Messages</Link>
                        </li>
                    </ul>

                    <div className=" relative py-5 border-b border-gray-800 sm:py-0 sm:border-0 ">
                        <div className="flex items-center sm:hidden">
                            <Image
                                /*h-10 = 40px height since Tailwind's defaults make sence but Next's <Image can't override it> img, video {max-width: 100%;height: auto;}*/
                                className="h-10 rounded-full border-2 border-gray-600"
                                src="https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="user's photo"
                                width={40}
                                height={40}
                            />

                            <p className="ml-4 text-white">Isla Shoeger</p>
                        </div>
                        <button
                            role="button"
                            className="flex items-center hidden rounded-full custom-outline sm:block  "
                            onClick={() =>
                                setIsProfileDropdownOpen(!isProfileDropdownOpen)
                            }
                            onKeyDown={handleKeyDown}
                        >
                            <Image
                                /*h-10 = 40px height since Tailwind's defaults make sence but Next's <Image can't override it> img, video {max-width: 100%;height: auto;}*/
                                className="h-10 rounded-full border-2 border-gray-600  xl:border-gray-300 "
                                src="https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="user's photo"
                                width={40}
                                height={40}
                            />
                        </button>
                        <ProfileDropdown
                            isProfileDropdownOpen={isProfileDropdownOpen}
                            setIsProfileDropdownOpen={setIsProfileDropdownOpen}
                        >
                            <ul
                                className={
                                    'items-center pt-3 pb-5 border border-gray-400  sm:absolute sm:right-0 sm:bg-white sm:rounded-lg sm:w-48 sm:mt-2 sm:py-2 sm:shadow-xl sm:z-2'
                                }
                            >
                                <li className="block hover:text-white text-gray-300 sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500 ">
                                    <Link href="">Account settings</Link>
                                </li>
                                <li className="mt-2 block hover:text-white text-gray-300 sm:mt-0 sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500 ">
                                    <Link href="">Support</Link>
                                </li>
                                <li className="mt-2 block hover:text-white text-gray-300 sm:mt-0 sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500 ">
                                    <Link href="">Sign out</Link>
                                </li>
                            </ul>
                        </ProfileDropdown>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default SiteHeader
