import React from "react";
import about from "../../assets/about.svg";

const About = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="subcontainer flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="">
              <img src={about} alt="react" className="w=64 md:w-96"/>
            </div>
            </div>
            <div className="aboutContent w-full md:w-1/2 md:pl-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Hello, I'm Blessing Dawodu &#128578;
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                I'm a Front-end React Developer from Nigeria, I have honed my
                skills in building websites that prioritize responsiveness,
                accessibility and usability.
              </p>
            </div>
          </div>

          <div className="history container py-3">
          <details className="items-center">
            <summary className="summary text-xl md:text-2xl font-bold cursor-pointer">History
            </summary>
            <div className="summary-content mt-2">
              <p className="text-gray-800 text-base md:text-lg">
                Before I met ALX and Stutern program, my journey as a Front-end
                React Developer was fueled by my passion for learning through
                online resources like <span className="font-bold">YouTube, W3Schools and FreeCodeCamp</span>. As a Developer
                from Nigeria, I have honed my skills in building websites that
                prioritize responsiveness, accessibility, and usability.
              </p>
              <p className="text-gray-800 text-base md:text-lg mt-2">
                Now, with the guidance and support of ALX and Stutern, I am
                eager to take my development skills to new heights and unlock
                even greater potential in the world of web development.
              </p>
            </div>
          </details>
        </div>

        <div className="experience container py-3">
          <details className="items-center">
            <summary className="summary text-xl md:text-2xl font-bold cursor-pointer">Experience
            </summary>
            <div className="summary-list mt-3">
              <div className="mt-3 border-b-2 border-dashed border-gray-500 pb-3">
                <div className="flex">
              <h2 className="text-lg md:text-xl font-bold">Front-end Developer -</h2>
              <p>Stutern</p>
              </div>
              <span>Oct. 2022 - June 2023 | Lagos, Nigeria</span>
              <ul className="project-tags flex mt-2 md:mt-4 space-x-2 pb-2 md:pb-3">
                <li className="text-base md:text-lg">Responsible for building user interfaces and developing frontend architecture on various client projects using several technologies and methodologies.</li>
              </ul>
              </div>
              </div>

                <div className="summary-list mt-3">
              <div className="mt-3 border-b-2 border-dashed border-gray-500 pb-3">
                <div className="flex">
              <h2 className="text-lg md:text-xl font-bold">Front-end Developer -</h2>
              <p>Alx</p>
              </div>
              <span>March 2022 - May 2023 | Virtual</span>
              <ul className="project-tags flex mt-2 md:mt-4 space-x-2 pb-2 md:pb-3">
                <li className="text-base md:text-lg">Collaborated with a team of two to create wireframes, mockups and prototypes for products and see them to deployment.</li>
              </ul>
              </div>
              </div>
          </details>
        </div>

        <div className="skills container py-3">
          <details className="items-center">
            <summary className="summary text-xl md:text-2xl font-bold cursor-pointer">Skills
            </summary>
            <div className="summary-list mt-3">
              <div className="mt-3 border-b-2 border-dashed border-gray-500 pb-3">
              <h2 className="text-lg md:text-xl font-bold">Languages</h2>
              <ul className="project-tags flex mt-2 md:mt-4 space-x-2 pb-2 md:pb-3">
                <li className="text-base md:text-lg">HTML</li>
                <li className="text-base md:text-lg">CSS</li>
                <li className="text-base md:text-lg">JavaScript</li>
              </ul>
              </div>

              <div className="mt-3 border-b-2 border-dashed border-gray-500 pb-3">
              <h2 className="text-lg md:text-xl font-bold">Libraries</h2>
              <ul className="project-tags flex mt-2 md:mt-4 space-x-2 pb-2 md:pb-3">
                <li className="text-base md:text-lg">React</li>
                <li className="text-base md:text-lg">React Query</li>
              </ul>
              </div>

              <div className="mt-3 border-b-2 border-dashed border-gray-500 pb-3">
              <h2 className="text-lg md:text-xl font-bold">Frameworks</h2>
              <ul className="project-tags flex mt-2 md:mt-4 space-x-2 pb-2 md:pb-3">
                <li className="text-base md:text-lg">Tailwind</li>
              </ul>
              </div>

              <div className="mt-3">
              <h2 className="text-lg md:text-xl font-bold">Tools & Systems</h2>
              <ul className="project-tags flex mt-2 md:mt-4 space-x-2 ">
                <li className="text-base md:text-lg">GIT</li>
                <li className="text-base md:text-lg">VSCODE</li>
                <li className="text-base md:text-lg">NPM</li>
              </ul>
              </div>
            </div>
          </details>
        </div> 

      <div className="section-link text-center mb-4">
      <a href="https://docs.google.com/document/d/1B7LVnhg91QikF7uQFa2vrCmStT4EbeYq3OmODtn8Xvg/edit" className="inline-block py-2 px-4">Download My Resume</a>
      </div>

        </div>
      </section>

      <div class="page-nav flex justify-between mb-6">
    <a href="/" className="ml-6">&#8592; Home</a>
    <a href="projects" className="mr-6">Projects &#8594;</a>
  </div>  
    </>
  );
};

export default About;
