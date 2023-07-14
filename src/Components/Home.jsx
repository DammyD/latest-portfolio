import React from 'react'
import Navbar from './Navbar'
import { FaHtml5, FaLinkedin, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import profile from '../assets/profile.jpg'

const Home = () => {

  return (
    <>
    <Navbar/>
    {/* <div className='home'>
        <div className='flex'>
        <div>
            <h1 className="text-3xl font-bold underline">Front-end React <br/> Developer &#128075;</h1>
            <p className=''>Hello, I'm Blessing Dawodu. A Front-end React Developer passionate about building responsive websites,<br/> with focus on accessibility and usability based in Lagos, Nigeria.</p>
            <ul className='flex'>
                <li><a href='https://www.linkedin.com/in/blessing-dawodu-75bb9619b/'><FaLinkedin size={20} className='mr-3'/></a></li>
                <li><a href='https://github.com/DammyD'><FaGithub size={20} className='mr-3'/></a></li>
                <li><a href='https://medium.com/@ibukunoluwadawodu'><BsMedium size={20}/></a></li>
            </ul>
        </div>
        <div>
            <img src={profile} className='' alt='profile'/>
        </div>
        </div>
        
        <div className='flex'>
        <p>Tech Stack |</p>
            <ul className='flex'>
                <li><FaHtml5 size={25} className='text-orange-500 mr-4 ml-5 transition-colors duration-300 hover:text-red' /></li>
                <li><FaCss3Alt size={25} className='text-blue-500 mr-4'/></li>
                <li><TbBrandJavascript size={25} className='text-yellow-500 mr-4'/></li>
                <li><FaReact size={25} className='text-blue-500 mr-4'/></li>
                <li><SiTailwindcss size={25} className='text-blue-500'/></li>
            </ul>
        </div>
    </div> */}
    <div className='min-h-screen bg-gray-100'>
    <div className='container mx-auto py-12 px-4'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2'>
          <h1 className='text-4xl font-bold mb-4'>
            Front-end React <br/> Developer{' '}
            <span role='img' aria-label='Developer'>
              &#128075;
            </span>
          </h1>
          <p className='text-lg mb-6'>
            Hello, I'm Blessing Dawodu. A Front-end React Developer passionate about building responsive websites, with
            focus on accessibility and usability based in Lagos, Nigeria.
          </p>
          <ul className='flex mb-8'>
            <li className='mr-4'>
              <a
                href='https://www.linkedin.com/in/blessing-dawodu-75bb9619b/'
                className='text-gray-700 hover:text-[#0e76a8] transition-colors duration-300'
              >
                <FaLinkedin size={20} />
              </a>
            </li>
            <li className='mr-4'>
              <a
                href='https://github.com/DammyD'
                className='text-gray-700 hover:text-[#333] transition-colors duration-300'
              >
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a
                href='https://medium.com/@ibukunoluwadawodu'
                className='text-gray-700 hover:text-[#03a87c] transition-colors duration-300'
              >
                <BsMedium size={20} />
              </a>
            </li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={profile} className='rounded-lg' alt='Profile' />
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='text-3xl font-bold mb-6'>Tech Stack</h2>
        <ul className='flex flex-wrap items-center'>
          <li className='mr-4 mb-4'>
            <FaHtml5 size={30} className='text-orange-500 hover:text-red-500 transition-colors duration-300' />
          </li>
          <li className='mr-4 mb-4'>
            <FaCss3Alt size={30} className='text-blue-500 hover:text-blue-600 transition-colors duration-300' />
          </li>
          <li className='mr-4 mb-4'>
            <TbBrandJavascript size={30} className='text-yellow-500 hover:text-yellow-600 transition-colors duration-300' />
          </li>
          <li className='mr-4 mb-4'>
            <FaReact size={30} className='text-blue-500 hover:text-blue-600 transition-colors duration-300' />
          </li>
          <li className='mr-4 mb-4'>
            <SiTailwindcss size={30} className='text-blue-500 hover:text-blue-600 transition-colors duration-300' />
          </li>
        </ul>
      </div>
    </div>
  </div>
    </>
  )
}

export default Home