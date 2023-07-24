import React from "react";
import about from "../../assets/about.svg";

const About = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="subcontainer w-full flex justify-between items-center mt-10">
            <div className="transform origin-center transition-transform duration-300 hover:animate-bounce cursor-pointer">
              <img src={about} alt="react" />
            </div>
            <div className="aboutContent">
              <h1 className="text-3xl font-bold mb-4">
                Hello, I'm Blessing Dawodu &#128578;
              </h1>
              <p className="text-lg text-gray-600">
                I'm a Front-end React Developer from Nigeria, I have honed my
                skills in building websites that prioritize responsiveness,
                accessibility and usability.
              </p>
            </div>
          </div>

          <div className="history container py-3">
          <details className="items-center cursor-pointer">
            <summary className="summary text-xl font-bold">History
            </summary>
            <div className="summary-content mt-2">
              <p className="text-gray-800">
                Before I met ALX and Stutern program, my journey as a Front-end
                React Developer was fueled by my passion for learning through
                online resources like YouTube and FreeCodeCamp. As a Developer
                from Nigeria, I have honed my skills in building websites that
                prioritize responsiveness, accessibility, and usability.
              </p>
              <p className="text-gray-800 mt-2">
                Now, with the guidance and support of ALX and Stutern, I am
                eager to take my development skills to new heights and unlock
                even greater potential in the world of web development.
              </p>
            </div>
          </details>
        </div>

        <div className="experience container py-3">
          <details className="items-center cursor-pointer">
            <summary className="summary text-xl font-bold">Experience
            </summary>
            <div className="summary-content mt-2">
              <p></p>
            </div>
          </details>
        </div>

        <div className="skills container py-3">
          <details className="items-center cursor-pointer">
            <summary className="summary text-xl font-bold">Skills
            </summary>
            <div className="summary-list mt-3">
              <div className="mt-3 border-b-2 border-dashed border-gray-500 pb-3">
              <h2>Languages</h2>
              <ul className="project-tags flex mt-4 space-x-2 pb-3">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              </div>

              <div className="mt-3 border-b-2 border-dashed border-gray-500 pb-3">
              <h2>Libraries</h2>
              <ul className="project-tags flex mt-4 space-x-2 pb-3">
                <li>React</li>
                <li>React Query</li>
              </ul>
              </div>

              <div className="mt-3 border-b-2 border-dashed border-gray-500 pb-3">
              <h2>Frameworks</h2>
              <ul className="project-tags flex mt-4 space-x-2 pb-3">
                <li>Tailwind</li>
              </ul>
              </div>

              <div className="mt-3">
              <h2>Tools & Systems</h2>
              <ul className="project-tags flex mt-4 space-x-2 ">
                <li>GIT</li>
                <li>VSCODE</li>
                <li>NPM</li>
              </ul>
              </div>
            </div>
          </details>
        </div> 

      <div className="section-link text-center mb-4">
      <a href="" className="inline-block py-2 px-4">Download My Resume</a>
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
