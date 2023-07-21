import React from "react";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaLinkedin,
  FaCss3Alt,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import article3 from "../../assets/article3.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import article1 from "../../assets/article1.png";
import article2 from "../../assets/article2.png";

import waves from "../../assets/waves.svg";
import CurvedTop from "../common/CurvedTop";

const Home = ({ colorTheme }) => {
  return (
    <>
      <section className={`home bg-gray-100 section ${colorTheme}`} id="home">
        <div className="home-container container grid px-4">
          <div className="home-content grid gap-3 md:grid-cols-3 md:gap-4 items-center">
            <div className="home-social grid gap-2 md:gap-2">
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
            <div className="home-data md:ml-0">
              <h1 className="home-title text-3xl font-bold mb-4">
                Front-end React <br />
                Developer 👋
              </h1>
              <p className="home-description text-gray-600 max-w-xs mb-12">
                Hello, I'm Blessing. A Front-end React Developer passionate
                about building responsive websites, with a focus on
                accessibility and usability based in Lagos, Nigeria.
              </p>

              <div className="stacks flex">
                <h3 className="text-xl font-semibold mr-2">Tech Stack</h3>
                <div className="stack-icons flex items-center space-x-4">
                  <FaHtml5 className="text-red-500 text-2xl" />
                  <FaCss3Alt className="text-blue-500 text-2xl" />
                  <TbBrandJavascript className="text-yellow-500 text-2xl" />
                  <FaReact className="text-purple-500 text-2xl" />
                  <SiTailwindcss className="text-teal-500 text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`about py-10 ${colorTheme}`}>
        <div className="curved-border"></div>
        <div className="container mx-auto px-4">
          <div className="subcontainer">
            <h2 className="text-2xl font-bold mb-2">About Me &#128105;</h2>
            <span className="bg-gray-400 block w-16 h-1 mb-4"></span>
            <h3 className="text-lg font-bold mb-4">
              A dedicated Front-end Developer based in Lagos, Nigeria.
            </h3>
            <p className="text-gray-800">
              As a junior Frontend Developer, I possess an impressive arsenal of
              skills in HTML, CSS, JavaScript, React, and Tailwind. I excel at
              designing and maintaining responsive websites that offer smooth
              user experiences. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. Additionally, I
              thrive on collaborating with cross-functional teams to develop
              outstanding web applications.
            </p>
          </div>
          <div class="section-link scroll-in text-center mt-10">
            <Link to="about" className="inline-block py-2 px-4">
              More About Me
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className={`bg-gray-100 py-10 ${colorTheme}`}>
        <div className="container mx-auto">
          <div className="title-container scroll-in mb-8">
            <h2 className="text-3xl font-bold mb-2">Projects &#128187;</h2>
            <div className="w-20 h-1 bg-gray-400 mb-4"></div>
            <h3 className="text-xl font-bold">
              Each project is a unique piece of development
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="project scroll-in bg-white p-4 rounded-lg shadow-md">
              <div className="project-image mb-4">
                <img
                  src={project1}
                  alt="Loan Prediction App"
                  className="w-full"
                />
              </div>
              <div className="project-content-container">
                <div className="project-content">
                  <h4 className="project-title text-xl font-bold mb-2">
                    Loan Prediction App
                  </h4>
                  <div className="project-description">
                    <p className="text-gray-600">
                      The Loan Prediction application is developed to aid
                      financial service providers in thoroughly evaluating loan
                      applicants with convenience, effectiveness, and precision.
                      This documentation provides an overview of the app's
                      features, installation instructions, and usage guidelines.
                    </p>
                  </div>
                  <ul className="project-tags flex mt-4 space-x-2">
                    <li className="">React</li>
                    <li className="">CSS</li>
                  </ul>
                  <div className="project-links flex mt-4 space-x-4">
                    <a
                      href="https://github.com/FrontDev-Group-5-Team-1B/loan-app"
                      className="flex items-center"
                    >
                      <span className="mr-1">Code</span>
                      <FaGithub />
                    </a>
                    <a
                      href="https://loan-prediction-app-group-1b.netlify.app/"
                      className="flex items-center"
                    >
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
                <img
                  src={article3}
                  alt="Loan Prediction App"
                  className="w-full"
                />
              </div>
              <div className="project-content-container">
                <div className="project-content">
                  <h4 className="project-title text-xl font-bold mb-2">
                    Hospital Management System
                  </h4>
                  <div className="project-description">
                    <p className=" text-gray-600">
                      This web app project was born out of the necessity to
                      improve the hospital system, moving away from the slow and
                      unreliable card-file technique that often results in the
                      loss of medical records. Our primary objective is to offer
                      a solution that aids local and underfunded hospitals in
                      Africa and other third-world regions by providing
                      efficient management of patient records and information.
                    </p>
                  </div>
                  <ul className="project-tags flex mt-4 space-x-2">
                    <li className="">React</li>
                    <li className="">CSS</li>
                    <li className="">Styled Component</li>
                  </ul>
                  <div className="project-links flex mt-4 space-x-4">
                    <a href="https://github.com/St-Pardon/klinik" className="flex items-center">
                      <span className="mr-1">Code</span>
                      <FaGithub />
                    </a>
                    <a
                      href="https://klinik-demo.netlify.app/"
                      className="flex items-center"
                    >
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
                <img
                  src={project2}
                  alt="Networking Platform"
                  className="w-full"
                />
              </div>
              <div className="project-content-container">
                <div className="project-content">
                  <h4 className="project-title text-xl font-bold mb-2">
                    Networking Platform
                  </h4>
                  <div className="project-description">
                    <p className="text-gray-600">This project is an Instagram clone built with HTML and CSS. It a Networking Platform that has redefine the way we connect and share in a digital age.</p>
                  </div>
                  <ul className="project-tags flex mt-4 space-x-2">
                    <li className="">HTML</li>
                    <li className="">CSS</li>
                  </ul>
                  <div className="project-links flex mt-4 space-x-4">
                    <a
                      href="https://github.com/DammyD/week-7_clone_assignment"
                      className="flex items-center"
                    >
                      <span className="mr-1">Code</span>
                      <FaGithub />
                    </a>
                    <a
                      href="https://instragram-demo-1.netlify.app/"
                      className="flex items-center"
                    >
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
            <Link to="projects" className="inline-block py-2 px-4">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section id="articles" className={`articles ${colorTheme} articles-section`}>
        <div className="container mx-auto px-4 py-8">
          <div className="title-container mb-8">
            <h2 className="section-title text-2xl font-bold">
              Featured Articles &#128466;
            </h2>
            <span className="bg-gray-400 block w-16 h-1 mb-4"></span>
            <h3 className="text-lg font-bold mb-4">
              I write the type of articles I would want to read when trying to
              understand a new concept or develop a skill. Here are some things
              I've written recently:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="article bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:translate-y-[-5px]">
              <div className="article-image">
                <a href="https://medium.com/@ibukunoluwadawodu/what-happens-when-you-type-a-url-in-the-browser-and-press-enter-498df8c5eb13">
                  <img src={article1} alt="What happens when you press enter" />
                </a>
              </div>
              <div className="article-content p-4">
                <div className="article-site text-gray-500 uppercase tracking-wide font-semibold">
                  Medium
                </div>
                <h3 className="article-title text-lg font-bold mb-4">
                  What happens when you type a URL in the browser and press
                  enter?
                </h3>
                <div className="article-description">
                  <p>
                    The purpose of this article is to explain, simply what
                    happens when you type a URL and press ENTER key.
                  </p>
                </div>
              </div>
            </div>

            <div className="article bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:translate-y-[-5px]">
              <div className="article-image">
                <a href="https://medium.com/@ibukunoluwadawodu/coding-is-not-enough-1c3c4ebe0e73">
                  <img src={article2} alt="Coding is not enough" />
                </a>
              </div>
              <div className="article-content p-4">
                <div className="article-site text-gray-500 uppercase tracking-wide font-semibold">
                  Medium
                </div>
                <h3 className="article-title text-lg font-bold mb-4">
                  Coding is NOT Enough
                </h3>
                <div className="article-description">
                  <p>
                    In this insightful article, we delve into the realm of soft
                    skills, exploring their indispensable role in complementing
                    technical expertise for developers, both seasoned experts,
                    and newcomers in the tech industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="article bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:translate-y-[-5px]">
              <div className="article-image">
                <a href="https://medium.com/@ibukunoluwadawodu/hospital-management-system-blog-e0ce8fef27e0">
                  <div className="image-container">
                    <img
                      src={article3}
                      alt="Hospital management system"
                      className="w-full"
                    />
                  </div>
                </a>
              </div>
              <div className="article-content p-4">
                <div className="article-site text-gray-500 uppercase tracking-wide font-semibold">
                  Medium
                </div>
                <h3 className="article-title text-lg font-bold mb-4">
                  Hospital Management System Blog post
                </h3>
                <div className="article-description">
                  <p>
                    In this comprehensive article, is a detailed journey that
                    unfolds the remarkable development of a Hospital Management
                    System, driven by a vison to revolutionize healthcare
                    management in unfunded regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="section-link scroll-in text-center mt-10">
            <Link to="articles" className="inline-block py-2 px-4">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
