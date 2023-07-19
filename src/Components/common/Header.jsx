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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-50">
    <nav className="container mx-auto flex items-center justify-between px-4 py-6 md:px-6">
      <Link to="/" className="text-white font-semibold text-xl">
        Blessing Dawodu
      </Link>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          {showMenu ? (
            <AiOutlineClose className="text-white text-2xl" />
          ) : (
            <AiOutlineMenu className="text-white text-2xl" />
          )}
        </button>
      </div>

      <div
        className={`md:flex md:items-center md:w-auto ${
          showMenu ? 'block' : 'hidden'
        }`}
      >
        <ul className="md:flex items-center space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-200 py-2 px-4 flex items-center"
            >
              <AiOutlineHome className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="text-white hover:text-gray-200 py-2 px-4 flex items-center"
            >
              <AiOutlineWoman className="mr-2" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="text-white hover:text-gray-200 py-2 px-4 flex items-center"
            >
              <FaTasks className="mr-2" />
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="articles"
              className="text-white hover:text-gray-200 py-2 px-4 flex items-center"
            >
              <MdOutlineArticle className="mr-2" />
              Articles
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  </header>
  );
};

export default Header;
