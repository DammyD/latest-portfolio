import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs'
import { SiHashnode } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='index-footer bg-gray-100 text-center'>
      <div className='container mx-auto py-4'>
        <div className='social-media mb-1'>
          <ul className='flex justify-center'>
            <li><a href="https://www.linkedin.com/in/blessing-dawodu-75bb9619b/"><FaLinkedin size={20} className='mr-3' /></a></li>
            <li><a href="https://github.com/DammyD"><FaGithub size={20} className='mr-3' /></a></li>
            <li><a href="https://medium.com/@ibukunoluwadawodu"><BsMedium size={20} className='mr-3' /></a></li>
            <li><a href="https://twitter.com/IbukunDawodu?t=2DRjGKM3QlV61EpdK0-ayA&s=08"><FaTwitter size={20} className='mr-3' /></a></li>
            <li><a href="https://dammyd.hashnode.dev/"><SiHashnode size={20} className='' /></a></li>
          </ul>
        </div>
        <div className='credits'>
          &copy; designed &amp; built by <a href="https://github.com/DammyD" className='font-bold text-blue-500 hover:text-red-500 underline' target="_blank" rel="noopener noreferrer">Blessing Dawodu</a>
        </div>
        <span className='heart'>&hearts;</span>
      </div>
    </footer>
  );
};

export default Footer;
