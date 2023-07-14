import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='index-footer'>
    <div className='container mx-auto py-4'>
      <div className='social-media'>
      <ul className='flex'>
                <li><FaLinkedin size={20} className='mr-3'/></li>
                <li><FaGithub size={20} className='mr-3'/></li>
                <li><BsMedium size={20} className='mr-3'/></li>
                <li><FaTwitter size={20}/></li>
            </ul>
      </div>
      <div>&copy; designed &amp; built by link Blessing Dawodu</div>
      <span className='heart'>&hearts;</span>
    </div>
    </footer>
  )
}

export default Footer