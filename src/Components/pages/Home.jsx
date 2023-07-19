import React from 'react'
import { Link } from 'react-router-dom'
import { FaHtml5, FaLinkedin, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import article3 from '../../assets/article3.png'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'


const Home = ({ colorTheme }) => {

  return (
    <>
      <section className={`home section bg-gray-100 ${colorTheme}`} id="home">
      <div className="home-container container grid">
        <div className="home-content grid gap-4 md:grid-cols-3 md:gap-4 items-center">
          <div className="home-social grid gap-2 md:gap-4">
            <a href="https://www.linkedin.com/in/blessing-dawodu-75bb9619b/">
              <FaLinkedin className="home-social-icon text-2xl" />
            </a>
            <a href="https://github.com/DammyD">
              <FaGithub className="home-social-icon text-2xl" />
            </a>
            <a href="https://medium.com/@ibukunoluwadawodu">
              <BsMedium className="home-social-icon text-2xl" />
            </a>
          </div>
          <div className="home-img h-116 rounded-full"></div>
          <div className="home-data ml-4 md:ml-0">
            <h1 className="home-title text-3xl font-bold mb-4">Front-end React <br/>Developer 👋</h1>
            <p className="home-description text-gray-600 max-w-xs mb-12">
              Hello, I'm Blessing. A Front-end React Developer passionate about building
              responsive websites, with a focus on accessibility and usability
              based in Lagos, Nigeria.
            </p>

            <div className="stacks flex">
                <h3 className="text-xl font-semibold">Tech Stack</h3>
              <div className="stack-icons flex items-center space-x-4">
                <FaHtml5 className="text-2xl" />
                <FaCss3Alt className="text-2xl" />
                <TbBrandJavascript className="text-2xl" />
                <FaReact className="text-2xl" />
                <SiTailwindcss className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>   
    </section>

    <section id="about" className={`py-10 ${colorTheme}`}>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="w-full h-64 bg-gray-300"></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">About Me &#128105;</h2>
          <span className="bg-gray-400 block w-16 h-1 mb-4"></span>
          <h3 className="text-lg font-bold mb-4">
            A dedicated Front-end Developer based in Lagos, Nigeria.
          </h3>
          <p className="text-gray-800">
            As a junior Frontend Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, and Tailwind. I excel at
            designing and maintaining responsive websites that offer smooth user
            experiences. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. Additionally, I thrive
            on collaborating with cross-functional teams to develop outstanding
            web applications.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" className={`bg-gray-100 py-10 ${colorTheme}`}>
  <div className="container mx-auto">
    <div className="title-container scroll-in mb-8">
      <h2 className="text-3xl font-bold mb-2">Projects &#128187;</h2>
      <div className="w-20 h-1 bg-gray-400 mb-4"></div>
      <h3 className="text-xl font-bold">Each project is a unique piece of development</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="project scroll-in bg-white p-4 rounded-lg shadow-md">
        <div className="project-image mb-4">
          <img src={project1} alt="Loan Prediction App" className="w-full" />
        </div>
        <div className="project-content-container">
          <div className="project-content">
            <h4 className="project-title text-xl font-bold mb-2">Loan Prediction App</h4>
            <div className="project-description">
              <p className="text-sm text-gray-600">
                The Loan Prediction application is developed to aid financial service providers in thoroughly evaluating
                loan applicants with convenience, effectiveness, and precision. This documentation provides an overview
                of the app's features, installation instructions, and usage guidelines.
              </p>
            </div>
            <ul className="project-tags flex mt-4 space-x-2">
              <li className="border-2 border-gray-400 py-1 px-2 rounded-sm">React</li>
              <li className="border-2 border-gray-400 py-1 px-2 rounded-sm">CSS</li>
            </ul>
            <div className="project-links flex mt-4 space-x-4">
              <a href="#" className="flex items-center text-blue-500 hover:text-blue-600">
                <span className="mr-1">Code</span>
                <FaGithub />
              </a>
              <a href="https://loan-prediction-app-group-1b.netlify.app/" className="flex items-center text-blue-500 hover:text-blue-600">
                <span>Live Demo</span>
                <span className="ml-1">
                  <FiExternalLink />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project scroll-in bg-white p-4 rounded-lg shadow-md">
        <div className="project-image mb-4">
          <img src={article3} alt="Loan Prediction App" className="w-full" />
        </div>
        <div className="project-content-container">
          <div className="project-content">
            <h4 className="project-title text-xl font-bold mb-2">Hospital Management System</h4>
            <div className="project-description">
              <p className="text-sm text-gray-600"> Description
              </p>
            </div>
            <ul className="project-tags flex mt-4 space-x-2">
              <li className="border-2 border-gray-400 py-1 px-2 rounded-sm">React</li>
              <li className="border-2 border-gray-400 py-1 px-2 rounded-sm">CSS</li>
              <li className="border-2 border-gray-400 py-1 px-2 rounded-sm">Styled Component</li>
            </ul>
            <div className="project-links flex mt-4 space-x-4">
              <a href="#" className="flex items-center text-blue-500 hover:text-blue-600">
                <span className="mr-1">Code</span>
                <FaGithub />
              </a>
              <a href="https://loan-prediction-app-group-1b.netlify.app/" className="flex items-center text-blue-500 hover:text-blue-600">
                <span>Live Demo</span>
                <span className="ml-1">
                  <FiExternalLink />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project scroll-in bg-white p-4 rounded-lg shadow-md">
        <div className="project-image mb-4">
          <img src={project2} alt="Networking Platform" className="w-full" />
        </div>
        <div className="project-content-container">
          <div className="project-content">
            <h4 className="project-title text-xl font-bold mb-2">Networking Platform</h4>
            <div className="project-description">
              <p className="text-sm text-gray-600">
               Description
              </p>
            </div>
            <ul className="project-tags flex mt-4 space-x-2">
              <li className="border-2 border-gray-400 py-1 px-2 rounded-sm">HTML</li>
              <li className="border-2 border-gray-400 py-1 px-2 rounded-sm">CSS</li>
            </ul>
            <div className="project-links flex mt-4 space-x-4">
              <a href="#" className="flex items-center text-blue-500 hover:text-blue-600">
                <span className="mr-1">Code</span>
                <FaGithub />
              </a>
              <a href="https://instragram-demo-1.netlify.app/" className="flex items-center text-blue-500 hover:text-blue-600">
                <span>Live Demo</span>
                <span className="ml-1">
                  <FiExternalLink />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="section-link scroll-in text-center mt-10">
          <Link to="projects" className="inline-block py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">View All Projects</Link>
        </div>
  </div>
</section>

<section id="articles" className={`articles ${colorTheme}`}>
  <div className="container mx-auto px-4 py-8">
    <div className="title-container mb-8">
      <h2 className="section-title text-2xl font-bold">Featured Articles &#128466;</h2>
      <span className="bg-gray-400 block w-16 h-1 mb-4"></span>
      <h3 className="text-lg font-bold mb-4">Content</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="article bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1">
        <div className="article-image">
          <a href="https://medium.com/@ibukunoluwadawodu/what-happens-when-you-type-a-url-in-the-browser-and-press-enter-498df8c5eb13">
            <img src={article1} alt="What happens when you press enter" />
          </a>
        </div>
        <div className="article-content p-4">
          <div className="article-site text-gray-500 uppercase tracking-wide font-semibold">Medium</div>
          <h3 className="article-title text-lg font-bold mb-4">What happens when you type a URL in the browser and press enter?</h3>
          <div className="article-description">
            <p>The purpose of this article is to explain, simply what happens when you type a URL and press ENTER.</p>
          </div>
        </div>
      </div>

      <div className="article bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1">
        <div className="article-image">
          <a href="https://medium.com/@ibukunoluwadawodu/coding-is-not-enough-1c3c4ebe0e73">
            <img src={article2} alt="Coding is not enough" />
          </a>
        </div>
        <div className="article-content p-4">
          <div className="article-site text-gray-500 uppercase tracking-wide font-semibold">Medium</div>
          <h3 className="article-title text-lg font-bold mb-4">What Happens when you press the Enter key</h3>
          <div className="article-description">
            <p>This article explains some of the soft skills needed to back up your skills as a developer.</p>
          </div>
        </div>
      </div>

      <div className="article bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1">
        <div className="article-image">
          <a href="https://medium.com/@ibukunoluwadawodu/hospital-management-system-blog-e0ce8fef27e0">
            <div className="image-container">
              <img src={article3} alt="Hospital management system" className="" />
            </div>
          </a>
        </div>
        <div className="article-content p-4">
          <div className="article-site text-gray-500 uppercase tracking-wide font-semibold">Medium</div>
          <h3 className="article-title text-lg font-bold mb-4">Hospital Management System Blog post</h3>
          <div className="article-description">
            <p>In this article...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
