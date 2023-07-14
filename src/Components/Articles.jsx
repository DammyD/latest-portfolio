import React from 'react'
import article1 from '../assets/article1.png'
import article2 from '../assets/article2.png'
import article3 from '../assets/article3.png'

const Articles = () => {
  return (
    <section id="articles" className="articles">
    <div className="container mx-auto px-4 py-8">
      <div className="title-container mb-8">
        <h2 className="section-title text-2xl font-bold">Featured Articles &#128466;</h2>
        <span className="bg-gray-400 block w-16 h-1 mb-4"></span>
        <h3 className="text-lg font-bold mb-4">content</h3>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="article">
          <div className="article-image">
            <a href="https://medium.com/@ibukunoluwadawodu/what-happens-when-you-type-a-url-in-the-browser-and-press-enter-498df8c5eb13">
              <img src={article1} alt="What happens when you press enter" />
              <div className="overlay">
                {/* <h3 className="overlay-content">What happens when you type a URL in the browser and press enter?</h3> */}
              </div>
            </a>
            <h3 className="image-text">What happens when you type a URL in the browser and press enter?</h3>
          </div>
          <div className="article-content">
            <div className="article-site">Medium</div>
            <h3 className="article-title text-lg font-bold mb-4">What happens when you type a URL in the browser and press enter?</h3>
            <div className="article-description">
              <p>The purpose of this article is to explain, simply what happens when you type a URL and press ENTER.</p>
            </div>
          </div>
        </div>
  
        <div className="article">
          <div className="article-image">
            <a href="https://medium.com/@ibukunoluwadawodu/coding-is-not-enough-1c3c4ebe0e73">
              <img src={article2} alt="Coding is not enough" />
              <div className="overlay">
                {/* <h3 className="overlay-content">What Happens when you press the Enter key</h3> */}
              </div>
            </a>
            <h3 className="image-text">Hospital Management System Blog post</h3>
          </div>
          <div className="article-content">
            <div className="article-site">Medium</div>
            <h3 className="article-title text-lg font-bold mb-4">What Happens when you press the Enter key</h3>
            <div className="article-description">
              <p>This article explains some of the soft skills needed to back up your skills as a developer.</p>
            </div>
          </div>
        </div>
  
        <div className="article">
          <div className="article-image">
            <a href="https://medium.com/@ibukunoluwadawodu/hospital-management-system-blog-e0ce8fef27e0">
                <div className='image-container'>
              <img src={article3} alt="Hospital management system" className='' />
              </div>
            <h3 className="image-text">Hospital Management System Blog post</h3>
            </a>
          </div>
          <div className="article-content">
            <div className="article-site">Medium</div>
            <h3 className="article-title text-lg font-bold mb-4">Hospital Management System Blog post</h3>
            <div className="article-description">
              <p>In this article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  )
}

export default Articles