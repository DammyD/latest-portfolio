import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({ projects }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      };

  return (
    <div className='project-slider '>
    <Slider {...settings}>
    {projects.map((project) => (
    <div className='project w-80 h-96 flex justify-between bg-white shadow-md rounded-md p-3 space-x-4 mb-4' key={project.id}>
      <div className='project-image'>
        <img src={project.imageSrc} alt={project.title} className='w-full h-auto rounded-md'  />
      </div>
      <div className='project-text mt-2'>
        <h3 className='text-lg font-semibold mb-1'>{project.title}</h3>
        <p className='text-sm text-gray-600'>{project.content}</p>
        <ul className='project-tags flex mt-3 space-x-2'>
          {project.tags.map((tag, index) => (
            <li className='inline-block bg-gray-100 px-2 py-1 text-xs rounded-md' key={index}>{tag}</li>
          ))}
        </ul>
        
        <div className='project-links mt-3'>
          {project.site && <a href={project.site}>Visit Site</a>}
        </div>
      </div>
    </div>
    ))}    
    </Slider>         
  </div>
  )
}

export default ProjectCard