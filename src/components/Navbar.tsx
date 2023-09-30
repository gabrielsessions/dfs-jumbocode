"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs: Array<{name: string, link: string}> = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Tutorials",
    link: "/webdev101"
  },
  {
    name: "GitHub Repo",
    link: "https://github.com/JumboCode/dress-for-success"
  }
];

interface NavbarProps {
  activeTab: string
}

// HTML/CSS Taken from flowbite: 
// https://flowbite.com/docs/components/navbar/
/**
 * Navbar - Generates the upper navigation bar at the top of each page
 * @param props - Requires an active tab so it can be highlighed
 * @constructor
 */
export default function Navbar(props: NavbarProps) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image className="mr-2" width={30} height={30} src="/jumbocode.svg" alt="JumboCode logo" />
            <span className="hidden lg:block self-center text-2xl font-semibold whitespace-nowrap ">JumboCode: Dress for Success</span>
            <span className="lg:hidden self-center text-2xl font-semibold whitespace-nowrap ">JumboCode: DFS</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={() => setMenuOpen(prev => !prev)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${menuOpen ? "" : "hidden"}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">

              {
                tabs.map((tab, index) => {
                  return (
                    <li key={index}>
                      <Link href={tab.link} className={tab.name === props.activeTab ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"} aria-current="page">{tab.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )

}