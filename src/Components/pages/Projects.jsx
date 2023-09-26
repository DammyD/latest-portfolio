import React from 'react'
import ProjectCard from '../cards/ProjectCard';
import projectData from '../../data/projectData';
import prevProject from '../../data/prevProject';
import webApps from '../../data/webApps';

const Projects = () => {

  return (
    <>
    <section className='py-10'>
      <div className="container mx-auto px-4">
        <div className="projectContent">
          <h1 className='sectionTitle text-3xl font-bold mb-2'>Projects <span className="title-icon">&#128187;</span></h1>
          <p class="sectionSubtitle text-base md:text-lg text-gray-600">
        Over the course of my career as a front-end developer, I've built several websites and applications. These are
        most of them:
      </p>
        </div>

        <div className='websites mt-6 md:mt-8'>
          <h2 className='text-base md:text-lg font-bold mt-4 mb-2 mr-2 md:mr-9'>WebPages ({projectData.length})</h2>  
          <ProjectCard projects={projectData} />
        </div>

        <div className='webapps mt-8'>
          <h2 className='text-base md:text-lg font-bold mt-4 mb-2'>WebApps ({webApps.length})</h2>  
          <ProjectCard projects={webApps} />
        </div>

        <div className='previous-portfolio mt-8'>
          <h2 className='text-base md:text-lg font-bold mt-4 mb-2'>Previous Portfolio ({prevProject.length})</h2>  
          <ProjectCard projects={prevProject} />
        </div>
      </div>
    </section>

    <div class="page-nav flex justify-between mb-4 md:mb-6">
    <a href="about" className="ml-2 md:ml-6">&#8592; About</a>
    <a href="articles" className="mr-2 md:mr-6">Articles &#8594;</a>
  </div> 
    </>



  )
}

export default Projects