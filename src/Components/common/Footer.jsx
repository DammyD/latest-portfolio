import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs'
import { SiHashnode } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='index-footer bg-gray-100 text-center'>
      <div className='container mx-auto py-4'>
        <div className='social-media'>
          <ul className='flex justify-center'>
            <li><a href="https://www.linkedin.com/in/blessing-dawodu-75bb9619b/"><FaLinkedin size={20} className='mr-3' /></a></li>
            <li><a href="https://github.com/DammyD"><FaGithub size={20} className='mr-3' /></a></li>
            <li><a href="https://medium.com/@ibukunoluwadawodu"><BsMedium size={20} className='mr-3' /></a></li>
            <li><a href="https://www.linkedin.com/in/blessing-dawodu-75bb9619b/"><FaTwitter size={20} className='mr-3' /></a></li>
            <li><a href="https://www.linkedin.com/in/blessing-dawodu-75bb9619b/"><SiHashnode size={20} className='' /></a></li>
          </ul>
        </div>
        <div className='credits'>
          &copy; designed &amp; built by <a href="https://github.com/DammyD/latest-portfolio" className='font-bold text-blue-500' target="_blank" rel="noopener noreferrer">Blessing Dawodu</a>
        </div>
        <span className='heart'>&hearts;</span>
      </div>
    </footer>
  );
};

export default Footer;
