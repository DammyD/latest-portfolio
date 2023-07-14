import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import article3 from '../assets/article3.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'

const Projects = () => {
  return (
<section id="projects" className="bg-gray-100 py-10">
  <div className="container mx-auto">
  <div className="mb-8">
  {/* <div className="items-center mb-4"> */}
    <h2 className="text-2xl font-bold mb-2">Projects &#128187;</h2>
    <span className="bg-gray-400 block w-16 h-1 mb-4"></span>
  {/* </div> */}
  <h3 className="text-lg font-bold">Each project is a unique piece of development</h3>
</div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <img src={project1} alt="Loan Prediction App" className="w-full" />
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold">Loan Prediction App</h4>
          <p className="text-sm text-gray-600">The Loan Prediction application is developed to aid financial service providers to thoroughly evaluating loan applicants with convenience, effectiveness, and precision. This documentation provides an overview of the app's features, installation instructions and usage guidelines.</p>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <p className="border-2 border-gray-400 py-1 px-2 rounded-sm">React</p>
          <p className="border-2 border-gray-400 py-1 px-2 rounded-sm">CSS</p>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
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

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <img src={article3} alt="Hospital Management System" className="w-full" />
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold">Hospital Management System</h4>
          <p className="text-sm text-gray-600">Project description goes here</p>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <p>React</p>
          <p>Styled Component</p>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <a href="#" className=" flex items-center text-blue-500 hover:text-blue-600">
          <span className="mr-1">Code</span>
            <FaGithub />
          </a>
          <a href="#" className="flex items-center text-blue-500 hover:text-blue-600">
          <span>Live Demo</span>
          <span className="ml-1">
      <FiExternalLink />
    </span>
          </a>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <img src={project2} alt="Networking Platform" className="w-full" />
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold">Networking Platform</h4>
          <p className="text-sm text-gray-600">Project description goes here</p>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <p>HTML</p>
          <p>CSS</p>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
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
</section>


  )
}

export default Projects