import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="w-full h-64 bg-gray-300"></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">About Me &#128105;</h2>
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
  )
}

export default About