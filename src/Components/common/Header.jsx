// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineWoman,
} from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  // toggle menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="bg-gray-600 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:py-4 md:px-6 bg-gray-600">
        <Link to="/" className="text-white font-semibold text-xl">
          Blessing Dawodu
        </Link>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          {showMenu ? (
            <AiOutlineClose
              className="text-white cursor-pointer text-2xl"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <AiOutlineMenu
              className="text-white cursor-pointer text-2xl"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>

        {/* Mobile menu */}
        <ul className={`md:flex items-center px-4 py-2 ${showMenu ? "block fade-in shadow-lg" : "hidden"} absolute top-full left-0 right-0 md:static md:space-x-0 md:flex bg-gray-500 md:bg-transparent transition-all duration-300 justify-center md:justify-start`}>
          <li>
            <Link
              to="/"
              className="flex md:inline-flex justify-center items-center text-white hover:text-gray-200 py-3 px-4"
              onClick={closeMenu}
            >
              <AiOutlineHome className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex md:inline-flex justify-center items-center text-white hover:text-gray-200 py-3 px-4"
              onClick={closeMenu}
            >
              <AiOutlineWoman className="mr-2" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex md:inline-flex justify-center items-center text-white hover:text-gray-200 py-3 px-4"
              onClick={closeMenu}
            >
              <FaTasks className="mr-2" />
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="flex md:inline-flex justify-center items-center text-white hover:text-gray-200 py-3 px-4"
              onClick={closeMenu}
            >
              <MdOutlineArticle className="mr-2" />
              Articles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


