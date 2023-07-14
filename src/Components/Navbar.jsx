import React, { useState, useEffect } from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineSetting} from 'react-icons/ai'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className='fixed top-0 left-0 right-0 z-10 bg-white shadow'>
//     <div className='container mx-auto px-4'>
//       <div className='flex justify-between items-center py-4'>
//         <h1 className='text-3xl font-bold text-[#E11584]'>
//           <a href='/' className='text-[#E11584]'>
//             Blessing Dawodu
//           </a>
//         </h1>
//         <div className='md:hidden'>
//           <button
//             className='text-gray-600 focus:outline-none'
//             onClick={toggleMenu}
//           >
//             {isOpen ? (
//               <AiOutlineClose className='h-6 w-6' />
//             ) : (
//               <AiOutlineMenu className='h-6 w-6' />
//             )}
//           </button>
//         </div>
//         <ul className='hidden md:flex space-x-4'>
//           <li>
//             <a
//               href='/'
//               className='text-gray-800 hover:text-[#E11584] transition-colors duration-300'
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href='#about'
//               className='text-gray-800 hover:text-[#E11584] transition-colors duration-300'
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href='#projects'
//               className='text-gray-800 hover:text-[#E11584] transition-colors duration-300'
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href='#articles'
//               className='text-gray-800 hover:text-[#E11584] transition-colors duration-300'
//             >
//               Articles
//             </a>
//           </li>
//         </ul>
//       </div>
//       <ul
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } md:hidden py-4 space-y-4`}
//       >
//         <li>
//           <a
//             href='/'
//             className='block text-gray-800 hover:text-[#E11584] transition-colors duration-300'
//           >
//             Home
//           </a>
//         </li>
//         <li>
//           <a
//             href='#about'
//             className='block text-gray-800 hover:text-[#E11584] transition-colors duration-300'
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             href='#projects'
//             className='block text-gray-800 hover:text-[#E11584] transition-colors duration-300'
//           >
//             Projects
//           </a>
//         </li>
//         <li>
//           <a
//             href='#articles'
//             className='block text-gray-800 hover:text-[#E11584] transition-colors duration-300'
//           >
//             Articles
//           </a>
//         </li>
//       </ul>
//     </div>
//   </nav>


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [colorTheme, setColorTheme] = useState('theme-white');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePalette = () => {
    setIsPaletteOpen(!isPaletteOpen);
  };

  const handleThemeChange = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
    setIsPaletteOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 bg-white shadow ${colorTheme}`}>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-3xl font-bold text-[#E11584]'>
            <a href='/' className='text-[#E11584]'>
              Blessing Dawodu
            </a>
          </h1>
          <div className='md:hidden'>
            <button
              className='text-gray-600 focus:outline-none'
              onClick={toggleMenu}
            >
              {isOpen ? (
                <AiOutlineClose className='h-6 w-6' />
              ) : (
                <AiOutlineMenu className='h-6 w-6' />
              )}
            </button>
          </div>
          <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:items-center`}>
            <li>
              <a
                href='/'
                className='text-gray-800 hover:text-[#E11584] transition-colors duration-300'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='text-gray-800 hover:text-[#E11584] transition-colors duration-300'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='text-gray-800 hover:text-[#E11584] transition-colors duration-300'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#articles'
                className='text-gray-800 hover:text-[#E11584] transition-colors duration-300'
              >
                Articles
              </a>
            </li>
            <li>
              <button
                className='text-gray-600 focus:outline-none'
                onClick={togglePalette}
              >
                <span className='sr-only'>Toggle Theme Palette</span>
                <span className='text-xl'>
                  {isPaletteOpen ? '✕' : '☀'}
                </span>
              </button>
            </li>
          </ul>
        </div>
        {isPaletteOpen && (
          <div className='theme-settings'>
            <div
              id='theme-white'
              onClick={() => handleThemeChange('theme-white')}
              className={`palette-color ${colorTheme === 'theme-white' ? 'active' : ''}`}
            ></div>
            <div
              id='theme-blue'
              onClick={() => handleThemeChange('theme-blue')}
              className={`palette-color ${colorTheme === 'theme-blue' ? 'active' : ''}`}
            ></div>
            <div
              id='theme-orange'
              onClick={() => handleThemeChange('theme-orange')}
              className={`palette-color ${colorTheme === 'theme-orange' ? 'active' : ''}`}
            ></div>
            <div
              id='theme-purple'
              onClick={() => handleThemeChange('theme-purple')}
              className={`palette-color ${colorTheme === 'theme-purple' ? 'active' : ''}`}
            ></div>
            <div
              id='theme-green'
              onClick={() => handleThemeChange('theme-green')}
              className={`palette-color ${colorTheme === 'theme-green' ? 'active' : ''}`}
            ></div>
            <div
              id='theme-black'
              onClick={() => handleThemeChange('theme-black')}
              className={`palette-color ${colorTheme === 'theme-black' ? 'active' : ''}`}
            ></div>
          </div>
        )}
      </div>
    </nav>

  );
};

export default Navbar